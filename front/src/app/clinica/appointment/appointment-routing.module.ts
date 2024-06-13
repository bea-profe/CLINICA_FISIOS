import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentsComponent } from './add-appointments/add-appointments.component';
import { AppointmentComponent } from './appointment.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { EditAppointmentsComponent } from './edit-appointments/edit-appointments.component';
import { ListAppointmentsComponent } from './list-appointments/list-appointments.component';

const routes: Routes = [

  { 
      path:'',
      component: AppointmentComponent,
  
  //PROTEGE DE USUARIOS NO AUTENTICADOS 
      children: [
        {
          path: 'register',
         component: AddAppointmentsComponent,
        },
        {
          path: 'list',
          component: ListAppointmentsComponent,
        },
        {
          path: 'list/edit/:id',
          component: EditAppointmentsComponent,
        },

       // { path: 'appointment/list/edit/:id', component: EditAppointmentsComponent }, // Ejemplo de ruta para edición

       
        {
          path: 'list/attendance/:id',
          component: AttendanceComponent,
        },
        
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
