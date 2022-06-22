import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from './incrementador.component';

describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IncrementadorComponent],
            imports: [FormsModule]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Should show legend', () => {
        component.leyenda = 'Progress';
        //explicit change detection:
        fixture.detectChanges();
        const element: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect(element.innerHTML).toContain('Progress')
    });

    it('Should show new value of input', () => {
        component.cambiarValor(5);
        fixture.detectChanges();
        //detect changes finished when whenStable trigger:
        fixture.whenStable().then(() => {
            const input = fixture.debugElement.query(By.css('input'));
            const element = input.nativeElement;
            expect(element.value).toBe('55')
        })
    })

    it('Should increment and decrement when click buttons', () => {
        const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'));
        buttons[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45);
        buttons[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe(50);
    })

    it('Should show new value of progress', () => {
        const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'));
        buttons[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45);
        fixture.detectChanges();
        //detect changes finished when whenStable trigger:
        fixture.whenStable().then(() => {
            const progress: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
            expect(progress.innerHTML).toContain('45');
        })
    })

});
