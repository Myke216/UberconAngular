import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { LoginComponent } from './login/login.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
},
{
  path: "logout",
  component: CerrarSesionComponent,
},{
  path: "cambiar_clave",
  component: CambiarClaveComponent,
},{
  path: "Recuperar_clave",
  component: RecuperarClaveComponent,
},{
  path: '',
  redirectTo: 'login'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
