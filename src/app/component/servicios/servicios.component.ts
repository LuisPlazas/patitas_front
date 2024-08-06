import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FullCalendarModule } from "@fullcalendar/angular";
import { CalendarOptions } from '@fullcalendar/core/index.js';
import dayGridMonth  from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [
    CommonModule,
    FullCalendarModule
  ],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  servicioSolicitado: any
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridMonth, interactionPlugin],
    dateClick: (info:any) => {
      this.prueba(info.dateStr)
    }
  }

  constructor(private route:ActivatedRoute){

  }

  ngOnInit():void{

    this.route.params.subscribe(param => {
      this.servicioSolicitado = param["nombre"]
    })
  }

  prueba(fecha:any){
    Swal.fire({
      title: "Estas seguro?",
      text: "Estas a punto de agendar tu cita",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Agendar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Tu cita ha sido creada",
          text: ("Su cita quedo agendada para el dia: " + fecha),
          icon: "success"
        });
      }
    });


  }
}
