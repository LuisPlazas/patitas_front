import { Component } from '@angular/core';
import { ProductosComponent } from '../productos/productos.component';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { AccesoriosComponent } from '../accesorios/accesorios.component';

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent {

  constructor(private router: Router){}
  regresarcompra(){
    this.router.navigate(['accesorios'])
  }

  dataCarrito:any

  ngOnInit():void{
    let data:any = localStorage.getItem("carrito")
    this.dataCarrito = JSON.parse(data)
  }

  eliminarCarrito(){
    Swal.fire({
      title: "Estas seguro?",
      text: "Estas a punto de cancelar tu compra",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "eliminado"
    }).then((result) => {
      if (result.isConfirmed) {
      localStorage.removeItem("carrito")
    let data:any =localStorage.getItem("carrito")
    this.dataCarrito = JSON.parse(data)
        Swal.fire({
          title: "Tu compra fue eliminada",
          text: ("Tú compra fue eliminada"),
          icon: "success"
        });
      }
    });

}}
