import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { FormularioAdopcionComponent } from '../formulario-adopcion/formulario-adopcion.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adopcion',
  standalone: true,
  imports: [CardComponent, FormularioAdopcionComponent],
  templateUrl: './adopcion.component.html',
  styleUrls: ['./adopcion.component.css']
})
export class AdopcionComponent {
  constructor( private router: Router ){  }

  formularioAdopcion(){
    this.router.navigate(['formulario-adopcion'])
  }
}
