import { DoctorComponent } from '../../intermediate/spy/doctors.component';
import { ROUTES } from './app.routes';

describe('routing tests', ()=>{
    it('doctor/:id should exist',()=>{
        expect(ROUTES).toContain({
            path:'doctor/:id',
            component: DoctorComponent
        });
    })
})