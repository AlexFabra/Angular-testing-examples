import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router-doctor',
  templateUrl: './router-doctor.component.html',
  styleUrls: ['./router-doctor.component.css']
})
export class RouterDoctorComponent implements OnInit {

  id:string='';

  constructor(public router:Router,public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.id=params['id'];
    })
  }
  
  saveDoctor(){
    this.router.navigate(['doctor','123']);
  }

}
