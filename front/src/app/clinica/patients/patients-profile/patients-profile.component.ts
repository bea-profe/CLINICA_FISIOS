import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientsService } from '../service/patients.service';

@Component({
  selector: 'app-patients-profile',
  templateUrl: './patients-profile.component.html',
  styleUrls: ['./patients-profile.component.scss']
})
export class PatientsProfileComponent {
  patientProfile:any = [];
  option_selected:number = 1;
  // optionSelected(value:number){
  //   this.option_selected = value;
  // }
  patientsProfile:any = [];
  
patient_id:string='';

result: number | undefined;
name:string = '';
surname:string = '';
movil:string = '';
email:string = '';
address:string = '';
password:string = '';
password_repet:string = '';
estudios:string='';
num_appointment:number = 0;
num_appointment_pendings:number = 0;
patient_selected:any;
appointment_pendings:any = [];
appointments:any = [];

public text_success:string = '';
public text_validation:string = '';
  constructor(
    public doctorService:PatientsService,
    public activatedRoute:ActivatedRoute,

  )
  {

  }

ngOnInit(): void{
this.activatedRoute.params.subscribe((resp:any)=>{
  console.log(resp);
  this.patient_id=resp.id;
})
  this.doctorService.profilePatiens(this.patient_id).subscribe((resp:any)=>{
    console.log(resp);

    this.num_appointment = resp.num_appointment;
    
      this.num_appointment_pendings = resp.num_appointment_pendings;
      this.patient_selected = resp.patient;
      this.appointment_pendings = resp.appointment_pendings.data;
      this.appointments = resp.appointments;

      this.result = this.num_appointment_pendings - this.num_appointment;
    
})
}
  
  optionSelected(value:number){
    this.option_selected = value;
  }
}
