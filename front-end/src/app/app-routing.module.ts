import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { IndiceUsuariosComponent } from './usuarios/indice-usuarios/indice-usuarios.component';


const routes: Routes = [
  {path:'usuarios',component:IndiceUsuariosComponent},
  {path:'usuarios/editar/:id',component:EditarUsuarioComponent},
  {path:'usuarios/crear',component:CrearUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
