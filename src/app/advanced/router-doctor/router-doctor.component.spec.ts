import { ActivatedRoute, Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, Subject, of } from 'rxjs';

import { RouterDoctorComponent } from './router-doctor.component';

class FakeRouter {
  navigate(params: any) { }
}
class FakeActivatedRoute {
  //params: Observable<any>= of();
  private subject = new Subject();
  get params(){
    return this.subject.asObservable();
  }
  push(value:any){
    this.subject.next(value);
  }
}

describe('RouterDoctorComponent', () => {
  let component: RouterDoctorComponent;
  let fixture: ComponentFixture<RouterDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterDoctorComponent],
      providers: [{provide:Router,useClass:FakeRouter}, {provide:ActivatedRoute,useClass:FakeActivatedRoute}]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to doctor route when doctor is saved', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router,'navigate');
    component.saveDoctor()
    expect(spy).toHaveBeenCalledWith(['doctor','123'])
  })

  it('should put to route id = new ',()=>{
    const activatedRoute=TestBed.inject(ActivatedRoute);
    (<FakeActivatedRoute>(<any>activatedRoute)).push({id:'new'});
    expect(component.id).toBe('new')
  })

});
