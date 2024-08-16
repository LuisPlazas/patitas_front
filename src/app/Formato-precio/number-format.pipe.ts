import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
  standalone: true
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value !== undefined && value !== null) {
      // Convertir el número a un string con el formato deseado
      let formattedValue = value.toLocaleString('es-ES').replace(/\./g, ',');

      // Eliminar decimales si son .00
      if (formattedValue.endsWith(',00')) {
        formattedValue = formattedValue.slice(0, -3);
      }

      // Reemplazar las comas por puntos para seguir el formato 25.000
      return formattedValue.replace(/,/g, '.');
    }
    return '';
  }
  }

