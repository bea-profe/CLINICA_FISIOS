import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../service/doctor.service';

@Component({
  selector: 'app-doctors-profile',
  templateUrl: './doctors-profile.component.html',
  styleUrls: ['./doctors-profile.component.scss']
})
export class DoctorsProfileComponent {
 doctorsProfile:any = [];
  option_selected:number = 1;
doctor_id:string='';

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
doctor_selected:any;
appointment_pendings:any = [];
appointments:any = [];

public text_success:string = '';
public text_validation:string = '';



  constructor(
    public doctorService:DoctorService,
    public activatedRoute:ActivatedRoute,

  )
  {

  }

ngOnInit(): void{
this.activatedRoute.params.subscribe((resp:any)=>{
  console.log(resp);
  this.doctor_id=resp.id;
})
  this.doctorService.profileDoctor(this.doctor_id).subscribe((resp:any)=>{
    console.log(resp);

    this.num_appointment = resp.num_appointment;
    
      this.num_appointment_pendings = resp.num_appointment_pendings;
      this.doctor_selected = resp.doctor;
      this.appointment_pendings = resp.appointment_pendings.data;
      this.appointments = resp.appointments;

      this.name = this.doctor_selected.name;
      this.surname = this.doctor_selected.surname;
      this.movil = this.doctor_selected.movil;
      this.email = this.doctor_selected.email;
      this.address = this.doctor_selected.address;

      this.estudios = this.doctor_selected.estudios;
      this.result = this.num_appointment -this.num_appointment_pendings ;
    
})
}
  
  optionSelected(value:number){
    this.option_selected = value;
  }


  update(){
    // this.text_validation = '';
    // this.text_success = '';
    // if(!this.name || !this.email || !this.surname){
    //   this.text_validation = "Los campos son necesarios (name,surname,email,avatar)";
    //   return;
    // }
    // if(this.password){
    //   if(this.password != this.password_repet){
    //     this.text_validation = "Las contraseñas deben ser iguales";
    //     return;
    //   }
    // }
    // let data:any = {
    //   name: this.name,
    //   surname: this.surname,
    //  movil: this.movil,
    //   email: this.email,
    //   address: this.address,
    // }
    // if(this.password){
    //   data.password = this.password;
    // }
    // this.doctorService.updateDoctorProfile(this.doctor_id,data).subscribe((resp:any) => {
    //   console.log(resp);

    //   if(resp.message == 403){
    //     this.text_validation = resp.message_text;
    //   }else{
    //     this.text_success = 'El usuario ha sido editado correctamente';
    //   }

    // })
  }
}
