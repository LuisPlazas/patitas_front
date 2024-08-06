import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accesorios',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './accesorios.component.html',
  styleUrl: './accesorios.component.css'
})
export class AccesoriosComponent {
  dataAlimentos:any
  dataAccesorios:any
  dataFarmacia:any
  dataCarritoLS:any = []

  constructor(private _apiServicio: ApiService){}

  ngOnInit():void{
    this.obtenerProductos()
    if(localStorage.getItem("carrito") != null){
      let data:any = localStorage.getItem("carrito")
      this.dataCarritoLS = JSON.parse(data)
    }
  }

  obtenerProductos(){
    this._apiServicio.getProductos("alimentos").subscribe((data:any) => {
      this.dataAlimentos = data
      console.log(this.dataAlimentos);
    })
    this._apiServicio.getProductos("farmacia").subscribe((data:any) => {
      this.dataFarmacia = data
      console.log(this.dataAlimentos);
    })
    this._apiServicio.getProductos("accesorios").subscribe((data:any) => {
      this.dataAccesorios = data
      console.log(this.dataAlimentos);
    })
  }


  agregarProductoCarrito(producto:any){
    this.dataCarritoLS.push(producto)
    localStorage.setItem("carrito", JSON.stringify(this.dataCarritoLS))
  }
}
