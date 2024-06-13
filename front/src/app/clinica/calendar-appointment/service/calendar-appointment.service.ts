import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { URL_SERVICIOS } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class CalendarAppointmentService {

  constructor(public http: HttpClient,
    public authService: AuthService,
  ) { }

  calendarAppointment(data:any){
    let headers = new HttpHeaders({'Authorization': 'Bearer '+this.authService.token});
    let URL = URL_SERVICIOS+"/appointment/calendar";
    return this.http.post(URL,data,{headers: headers});
  }
}
