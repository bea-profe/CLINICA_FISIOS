import { Injectable } from '@angular/core';
import { routes } from '../routes/routes';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiResultFormat } from '../models/models';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getDoctorsList(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/doctors-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getPatientsList(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/doctors-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getStaffList(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/staff-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getAppointmentList(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/appointment-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getStaffHoliday(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/staff-holiday.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getSchedule(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/schedule.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getInvoices(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/invoices.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  
  public getExpenses(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/expenses.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  

 
 
  public getAssetsList(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/assets-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }



  public getPatientDashboard(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/patient-dashboard.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }

  public getEvents() {
    return this.http.get<apiResultFormat>('assets/json/scheduleevents.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getDataTables() {
    return this.http.get<apiResultFormat>('assets/json/data-tables.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }


  public sideBar = [
    {
      tittle: 'Menu',
      showAsTab: false,
      separateRoute: false,
      menu: [
    
        {
          menuValue: 'Roles-Permisos',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'gallery',
          base2: 'profile',
          icon: 'fa-columns',
          faIcon: true,
          subMenus: [
           
            {
              menuValue: 'Listado',
              route: routes.listadoRole,
              base: routes.listadoRole,
              permision: 'list_rol',
              show_nav: true,
            },
            {
              menuValue: 'Registrar Rol',
              route: routes.registerRole,
              base: routes.registerRole,
              permision: 'register_rol',
              show_nav: true,
            },
            {
              menuValue: 'Editar Rol',
              route: '',
              base: '',
              permision: 'edit_rol',
              show_nav: false,
            },
            {
              menuValue: 'Borrar Rol',
              route: '',
              base: '',
              permision: 'delete_rol',
              show_nav: false,
            },
          ],
        },
        {
          menuValue: 'Usuarios',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'staffs',
          img: 'assets/img/icons/menu-icon-08.svg',
          subMenus: [
          
            
            {
              menuValue: 'Listar usuarios ',
              route: routes.staffList,
              base: routes.staffList,
              permision: 'list_staff',
              show_nav: true,
            },
            {
              menuValue: 'Registrar usuario',
              route: routes.addStaff,
              base: routes.addStaff,
              permision: 'register_staff',
              show_nav: true,
            },
            {
              menuValue: 'Borrar usuarios ',
              route:'' ,
              base: '',
              permision: 'delete_staff',
              show_nav: false,
            },
            {
              menuValue: 'Editar usuarios ',
              route: '',
              base: '',
              permision: 'edit_staff',
              show_nav: false,
            },
            
          ],
        },{
          menuValue: 'Especialidades',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'specialtys',
          img: 'assets/img/icons/menu-icon-06.svg',
          subMenus: [
           
           
            {
              menuValue: 'Lista Especialidades ',
              route: routes.departmentList,
              base: routes.departmentList,
              permision: 'list_specialty',
              show_nav: true,
            },
            {
              menuValue: 'Registrar Especialidad',
              route: routes.addDepartment,
              base: routes.addDepartment,
              permision: 'register_specialty',
              show_nav: true,
            },
            {
              menuValue: 'Editar Especialidad',
              route: '',
              base: '',
              permision: 'edit_specialty',
              show_nav: false,
            },
            {
              menuValue: 'Eliminar Especialidad ',
              route: '',
              base: '',
              permision: 'delete_specialty',
              show_nav: false,
            },
          ],
        },
        {
          menuValue: 'Profesionales',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'doctor',
          img: 'assets/img/icons/menu-icon-02.svg',
          subMenus: [
            {
              menuValue: 'Listar profesional',
              route: routes.doctorsList,
              base: routes.doctorsList,
              permision: 'list_doctor',
              show_nav: true,
            },
            {
              menuValue: 'Registrar profesional',
              route: routes.addDoctor,
              base: routes.addDoctor,
              permision: 'register_doctor',
              show_nav: true,
            },
            {
              menuValue: 'Editar profesional',
              route: '',
              base: '',
              permision: 'edit_doctor',
              show_nav: false,
            },
           
            {
              menuValue: 'Borrar profesional',
              route: '',
              base: '',
              permision: 'delete_doctor',
              show_nav: false,
            },
            {
              menuValue: 'Profile profesional',
              route: '',
              base: '',
              permision: 'profile_doctor',
              show_nav: false,
            },
          ],
        },
        {
          menuValue: 'Pacientes',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'patient',
          img: 'assets/img/icons/menu-icon-03.svg',
          subMenus: [
           
            {
              menuValue: 'Listado pacientes',
              route: routes.patientsList,
              base: routes.patientsList,
              permision: 'list_patient',
              show_nav: true,
            },
            {
              menuValue: 'Registrar paciente',
              route: routes.addPatient,
              base: routes.addPatient,
              permision: 'register_patient',
              show_nav: true,
            },
            {
              menuValue: 'Editar pacientes',
              route: '',
              base: '',
              permision: 'edit_patient',
              show_nav: false,
            },
            {
              menuValue: 'Borrar pacientes',
              route: '',
              base: '',
              permision: 'delete_patient',
              show_nav: false,
            },
            {
              menuValue: 'Profile paciente',
              route: '',
              base: '',
              permision: 'profile_patient',
              show_nav: false,
            },
          ],
        },
       
        {
          menuValue: 'Citas',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'appointments',
          img: 'assets/img/icons/menu-icon-04.svg',
          subMenus: [
           
            {
              menuValue: 'Listar citas',
              route: routes.appointmentList,
              base: routes.appointmentList,
              permision: 'list_appointment',
              show_nav: true,
            },
            {
              menuValue: 'Registrar cita',
              route: routes.addAppointment,
              base: routes.addAppointment,
              permision: 'register_appointment',
              show_nav: true,
            },
            {
              menuValue: 'Editar cita',
              route: '',
              base: '',
              permision: 'edit_appointment',
              show_nav: false,
            },
            {
              menuValue: 'Borrar cita',
              route: '',
              base: '',
              permision: 'delete_appointment',
              show_nav: false,
            },
            {
              menuValue: 'Consulta cita',
              route: '',
              base: '',
              permision: 'attention_appointment',
              show_nav: false,
            },
          ],
        },
        
   
        {
          menuValue: 'Calendario',
          route: routes.calendar,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'fa-calendar',
          faIcon: true,
          base: 'calendar',
          permision: 'calendar',
          show_nav: true,
          subMenus: [],
        },
        
        
      ],
    },
  ];

 

  


}
