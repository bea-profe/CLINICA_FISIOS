import { Component } from '@angular/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarAppointmentService } from '../service/calendar-appointment.service';
import { SpecialitieService } from '../../specialitie/service/specialitie.service';
import esLocale from '@fullcalendar/core/locales/es'; // Import the Spanish locale
@Component({
  selector: 'app-appoitment-calendar',
  templateUrl: './appoitment-calendar.component.html',
  styleUrls: ['./appoitment-calendar.component.scss']
})
export class AppoitmentCalendarComponent {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  events: any[] = [];


  public specialities:any  = [];
  public specialitie_id = '';
  public search_doctor = '';
  public search_patient = '';

  public user:any;

  constructor(
    public specialitieService: SpecialitieService,
    public appointmentCalendarService: CalendarAppointmentService,
  ) {


   


    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // this.data.getEvents().subscribe((events: any) => {
    //   this.events = events;
    //   this.options = { ...this.options, ...{ events: events.data } };
    // });
    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialDate: new Date(),
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
      initialView: 'dayGridMonth',
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      locale: esLocale, // Set the locale to Spanish
      events: [
        { title: 'Meeting', start: new Date() }
      ]
    };
  }


  isPermited(){
    let flag = false;
    this.user.roles.forEach((rol:any) => {
      if((rol).toUpperCase().indexOf("ESPECIALISTA") != -1){
        flag = true;
      }
    });
    return flag;
  }


  ngOnInit(): void {


    
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


    this.specialitieService.listSpecialities().subscribe((resp:any) => {
      this.specialities = resp.specialities;
      
    })
    this.user=this.appointmentCalendarService.authService.user;
    this.calendarAppointment();
  }
  calendarAppointment() {
    let data = {
      specialitie_id: this.specialitie_id,
      search_doctor: this.search_doctor,
      search_patient: this.search_patient,
    }
    this.appointmentCalendarService.calendarAppointment(data).subscribe((resp:any) => {
      console.log(resp);
      this.options = { ...this.options, ...{ events: resp.appointments } };
    })
  }



  searchData(){
    this.calendarAppointment();
  }


}
