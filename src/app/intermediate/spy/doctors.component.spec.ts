import { from, of, throwError } from 'rxjs';

import { DoctorComponent } from './doctors.component';
import { DoctorsService } from './doctors.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

describe('DoctorComponent', () => {

    let component: DoctorComponent;
    let service: DoctorsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [DoctorsService]
        });
        service = TestBed.inject(DoctorsService);
        component = new DoctorComponent(service);
    });

    it('init: should load doctors ', () => {
        spyOn(service, 'getDoctors').and.callFake(() => { return from(['doctor1', 'doctor2']) });
        component.ngOnInit();
        expect(component.doctors.length).toBeGreaterThan(0);
    });

    it('should call service to add doctor', () => {
        const spy=spyOn(service, 'addDoctor').and.callFake(() => { return of({}) });
        component.addDoctor();
        expect(spy).toHaveBeenCalled();
    })

    it('shoud add new doctor to doctors array',()=>{
        const doctor = {id:1,name:'doctor1'};
        spyOn(service, 'addDoctor').and.callFake(() => { return of(doctor) });
        component.addDoctor();
        //expect(component.doctors.length).toBe(1);
        expect(component.doctors.indexOf(doctor)).toBeGreaterThanOrEqual(0);
    })

    it('doctorsService addDoctor() error should throw error at component',()=>{
        const error = 'error';
        spyOn(service, 'addDoctor').and.returnValue( throwError ( () => new Error(error) ) );
        component.addDoctor();
        expect(component.errorMessage).toBe(error);
    })

    it('should call server to delete a doctor',()=>{
        spyOn(window,'confirm').and.returnValue(true);
        const spy = spyOn(service, 'deleteDoctor').and.callFake(() => { return of({}) });
        component.deleteDoctor('1');
        expect(spy).toHaveBeenCalledWith('1');
    })

    it('must not delete doctor from doctors array',()=>{
        spyOn(window,'confirm').and.returnValue(false);
        const spy=spyOn(service, 'deleteDoctor').and.callFake(() => { return of({}) });
        component.deleteDoctor('1');
        expect(spy).not.toHaveBeenCalledWith('1');
    })


});