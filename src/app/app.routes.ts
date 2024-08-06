import { Routes } from '@angular/router';
import { InicioComponent } from './component/inicio/inicio.component';
import { AccesoriosComponent } from './component/accesorios/accesorios.component';
import { ServiciosComponent } from './component/servicios/servicios.component';
import { ClientesComponent } from './component/clientes/clientes.component';
import { CompraComponent } from './component/compra/compra.component';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';
import { AdopcionComponent } from './component/adopcion/adopcion.component';


export const routes: Routes = [
  { 
    path: '', component: InicioComponent 
  },
  { 
    path: 'accesorios', component: AccesoriosComponent 
  },
  { 
    path:'compra', component: CompraComponent 
  },
  { 
    path: 'inicio', component: InicioComponent
  },
  {
    path: 'servicios/:nombre', component: ServiciosComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'registro', component: RegistroComponent
  },
  {
    path: 'adopcion', component: AdopcionComponent
  }

]



