import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarAppointmentRoutingModule } from './calendar-appointment-routing.module';
import { CalendarAppointmentComponent } from './calendar-appointment.component';
import { AppoitmentCalendarComponent } from './appoitment-calendar/appoitment-calendar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CalendarAppointmentComponent,
    AppoitmentCalendarComponent
  ],
  imports: [
    CommonModule,
    CalendarAppointmentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
  ]
})
export class CalendarAppointmentModule { }
