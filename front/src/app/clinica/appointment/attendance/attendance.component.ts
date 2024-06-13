import { Component } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../service/appointment.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent {
  
  name: string = '';
  surname: string = '';
  DNI: string = '';
  movil: string = '';

  public appointment_id: any;
  public appointment_selected: any;

  public text_success: string = '';
  public text_validation: string = '';

  //diagnostico:any;
  uso:any;
  description:any;
  prescription: any;
  patient_id: any;
  name_prescription: any;
  isLoading: boolean | undefined;

  public medical:any[] = [];

 // public appointment_attention_selected:any;
  public appointment_attendance_selected:any;
 

  constructor(
    public appointmentService: AppointmentService,
    public activatedRoute: ActivatedRoute,
   
  ) {
    
  }

 ngOnInit(): void {
    // Método ejecutado al inicializar el componente
    // Obtener el ID de la cita de los parámetros de la URL
     this.activatedRoute.params.subscribe((resp: any) => {
      console.log(resp);
      this.appointment_id = resp.id;
     });

    // Cargar configuraciones y detalles de la cita seleccionada
   
      this.appointmentService.showAppointment(this.appointment_id).subscribe((resp: any) => {
         console.log(resp);
        this.appointment_selected = resp.appointment;
       this.name = this.appointment_selected.patient.name;
        this.surname = this.appointment_selected.patient.surname;
         this.movil = this.appointment_selected.patient.movil;
        this.DNI = this.appointment_selected.patient.DNI;
        
      })

      //que se queden seteados los datos de las antiguas recetas

this.appointmentService.showAppointmentAtendance(this.appointment_id).subscribe((resp: any) => {
console.log(resp);
        
 this.appointment_attendance_selected = resp.appointment_attention;
this.medical= this.appointment_attendance_selected?.prescription;
this.description= this.appointment_attendance_selected?.description;
        
   })
   
   }



loadAppointmentDetails(): void {
  this.appointmentService.showAppointment(this.appointment_id).subscribe(
    (resp: any) => {
      console.log(resp);
      this.appointment_selected = resp.appointment;
      this.name = this.appointment_selected.patient.name;
      this.surname = this.appointment_selected.patient.surname;
      this.movil = this.appointment_selected.patient.movil;
      this.DNI = this.appointment_selected.patient.DNI;
    },
    error => {
      console.error('Error fetching appointment details', error);
    }
  );
}

loadAppointmentAttendance(): void {
  this.appointmentService.showAppointmentAtendance(this.appointment_id).subscribe(
    (resp: any) => {
      console.log(resp);
      this.appointment_attendance_selected = resp.appointment_attendance;
      this.medical = this.appointment_attendance_selected?.prescription ;
      this.description = this.appointment_attendance_selected?.description;
    },
    error => {
      console.error('Error fetching appointment attendance', error);
    }
  );
}

addMedicamento() {
  this.medical.push({
    prescription: this.prescription,
    uso: this.uso,
  });
  this.uso = '';
  this.prescription = '';
}

deleteMedicamento(i: number) {
  this.medical.splice(i, 1);
}

save(): void {

  console.log('Entering save method');
  console.log('description :', this.description );
  console.log('prescription :', this.prescription);
  console.log('uso :', this.uso);
  console.log('medical:', this.medical);
  
  console.log('appointment_id:', this.appointment_id);
  console.log('description.length:', this.description.length); // This might be the problematic line
  console.log('medical.length:', this.medical.length); // This might be the problematic line
  
  if (!this.description || this.medical.length === 0) {
      this.text_validation = "Es necesario que introduzca el diagnóstico y una receta médica";
      return;
  }

  // Prepare the data to be sent
  let data = {
      appointment_id: this.appointment_id,
      patient_id: this.appointment_selected.patient_id,
      description: this.description,
      medical: this.medical,
  }

  console.log('Data to be sent:', data); // Log para verificar datos

  // Set loading state
  this.isLoading = true;
  this.text_validation = "";
  this.text_success = "";

  // Call the service to save the attention details
  this.appointmentService.registerAttention(data).subscribe(
      (resp: any) => {
          console.log(resp);
          this.text_success = "Se guardó la información de la atención médica";
          this.isLoading = false;
      },
      (error: any) => {
          console.error(error);
          this.text_validation = "Ocurrió un error al guardar la información";
          this.isLoading = false;
      }
  );
}
  




}
