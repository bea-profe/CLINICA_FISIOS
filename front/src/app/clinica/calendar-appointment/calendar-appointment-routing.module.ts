import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppoitmentCalendarComponent } from './appoitment-calendar/appoitment-calendar.component';
import { CalendarAppointmentComponent } from './calendar-appointment.component';

const routes: Routes = [{
  path: '',
  component: CalendarAppointmentComponent,
  children:[
    {
      path:'show',
      component: AppoitmentCalendarComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarAppointmentRoutingModule { }
