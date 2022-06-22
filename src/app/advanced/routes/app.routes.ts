import { DoctorComponent } from '../../intermediate/spy/doctors.component';
import { HospitalComponent } from '../../intermediate2/hospital/hospital.component';
import { IncrementadorComponent } from '../../intermediate2/incrementer/incrementador.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    { path: 'hospital', component: HospitalComponent },
    { path: 'doctor/:id', component: DoctorComponent },
    { path: '**', component: IncrementadorComponent }
]