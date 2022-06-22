import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { NavbarComponent } from './navbar.component';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have link to doctors page',()=>{
    const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    console.log(debugElements)
    let exists = false;
    for(const element of debugElements){
      if(element.attributes['routerLink'] === '/doctors' ){
        exists=true;
        break;
      }
    }
    expect(exists).toBeTruthy();

  })


});
