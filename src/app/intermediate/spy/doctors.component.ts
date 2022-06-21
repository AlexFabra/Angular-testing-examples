import { Component, OnInit } from '@angular/core';

import { DoctorsService } from './doctors.service';

@Component({
  selector: 'app-doctor',
  template: `
    <p>
      Doctors works!
    </p>
  `,
  styles: []
})
export class DoctorComponent implements OnInit {

  public doctors: any[] = [];
  public errorMessage: string = 'error';

  constructor(public _doctorService: DoctorsService) { }

  ngOnInit() {
    this._doctorService.getDoctors()
      .subscribe((medicos: any) => this.doctors = medicos);
  }

  addDoctor() {
    const medico = { nombre: 'Doctor Giovanni Anninuovo' };

    this._doctorService.addDoctor(medico)
      .subscribe(
        (medicoDB: any) => {
          this.doctors.push(medicoDB),
          (err:any) => this.errorMessage = err
        }
      );
  }

  deleteDoctor(id: string) {
    const ok = confirm('Sure you want to delete this doctor?');

    if (ok) {
      this._doctorService.deleteDoctor(id);
    }

  }

}
