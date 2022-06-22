import { IncrementadorComponent } from './incrementador.component';

describe('incrementer unit tests',()=>{
    let component:IncrementadorComponent;
    it('progress shouldnt pass 100 ',()=>{
        component.progreso=50;
        component.cambiarValor(5);
        expect(component.progreso).toBe(55)
    })
})