import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';

import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { FormularioUsuarioComponent } from './usuarios/formulario-usuario/formulario-usuario.component';


import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { IndiceUsuariosComponent } from './usuarios/indice-usuarios/indice-usuarios.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';

import { SelectorMultipleComponent } from './utilidades/selector-multiple/selector-multiple.component';





@NgModule({
  declarations: [
    AppComponent,

    IndiceUsuariosComponent,
    CrearUsuarioComponent,

    ListadoGenericoComponent,
    FormularioUsuarioComponent,

    EditarUsuarioComponent,
    SelectorMultipleComponent
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),

  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
