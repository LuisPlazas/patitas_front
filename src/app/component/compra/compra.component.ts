import { Component } from '@angular/core';
import { ProductosComponent } from '../productos/productos.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent {

  dataCarrito:any

  ngOnInit():void{
    let data:any = localStorage.getItem("carrito")
    this.dataCarrito = JSON.parse(data)
  }

  eliminarCarrito(){
    localStorage.removeItem("carrito")
    let data:any =localStorage.getItem("carrito")
    this.dataCarrito = JSON.parse(data)
  }

}
