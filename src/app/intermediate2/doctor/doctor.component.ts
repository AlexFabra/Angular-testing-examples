import { Component, OnInit } from '@angular/core';

import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html'
})
export class DoctorComponent implements OnInit {

  working: boolean = false;
  doctors: any[] = [];

  constructor(private doctorsService: DoctorService) { }

  ngOnInit(): void {
  }

  isWorking() {
    return this.working;
  }

  obtainDoctors() {
    this.doctorsService.getDoctors().subscribe((doctors: any) => { this.doctors = doctors });
  }

}
