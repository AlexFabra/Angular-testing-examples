import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorComponent } from './doctor.component';
import { DoctorService } from './doctor.service';
import { HttpClientModule } from '@angular/common/http';

describe('DoctorComponent', () => {
  let component: DoctorComponent;
  //for access to the DOM:
  let fixture: ComponentFixture<DoctorComponent>;

  beforeEach(async () => {
    //TestBed is for integration tests 
    await TestBed.configureTestingModule({
      declarations: [ DoctorComponent ],
      providers: [DoctorService],
      imports:[HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should return if its working', () => {
    let res = component.isWorking();
    expect(typeof res==='boolean').toBeTruthy();
  });


});
