import { Component, OnInit } from '@angular/core';
import { UsuarioDTO } from '../usuario';
import { UsuariosService } from '../usuarios.service';
import { PageEvent } from '@angular/material/paginator';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-indice-usuarios',
  templateUrl: './indice-usuarios.component.html',
  styleUrls: ['./indice-usuarios.component.css']
})
export class IndiceUsuariosComponent implements OnInit {


  constructor(private UsuarioService:UsuariosService) { }
  usuarios:UsuarioDTO[];
  columnasAMostrar:string[] =['user','nombre','apellido','email','activo'];
  cantidadTotalRegistros;
  paginaActual=1;
  cantidadRegistrosAMostrar=10;
  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual,this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina:number,cantidadElementosAMostrar)
  {
    this.UsuarioService.obtenerTodos(pagina,cantidadElementosAMostrar).subscribe((respuesta:HttpResponse<UsuarioDTO[]>)=>{

      this.usuarios=respuesta.body;
      console.log(respuesta.headers.get("cantidadTotalRegistros"));
      this.cantidadTotalRegistros=respuesta.headers.get("cantidadTotalRegistros");
     },error=> console.log(error));
  }
  actualizarPaginacion(datos:PageEvent) {
    this.paginaActual =datos.pageIndex+1;
    this.cantidadRegistrosAMostrar =datos.pageSize;
    this.cargarRegistros(this.paginaActual,this.cantidadRegistrosAMostrar);
  }

  borrar(id:number) {
    this.UsuarioService.borrar(id)
    .subscribe(()=>{
      this.cargarRegistros(this.paginaActual,this.cantidadRegistrosAMostrar);
    },error=>console.error(error));

  }

}
