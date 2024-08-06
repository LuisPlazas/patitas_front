import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FullCalendarModule } from "@fullcalendar/angular";
import { CalendarOptions } from '@fullcalendar/core/index.js';
import dayGridMonth  from "@fullcalendar/daygrid";
@Component({
  selector: 'app-vista-calendario',
  standalone: true,
  imports: [
    CommonModule,
    FullCalendarModule
  ],
  templateUrl: './vista-calendario.component.html',
  styleUrl: './vista-calendario.component.css'
})
export class VistaCalendarioComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridMonth]
  }
}
