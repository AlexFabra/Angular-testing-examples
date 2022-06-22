import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DoctorComponent } from './intermediate/spy/doctors.component';
import { HospitalComponent } from './intermediate2/hospital/hospital.component';
import { IncrementadorComponent } from './intermediate2/incrementer/incrementador.component';
import { NavbarComponent } from './advanced/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { ROUTES } from './advanced/routes/app.routes';
import { RouterDoctorComponent } from './advanced/router-doctor/router-doctor.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
