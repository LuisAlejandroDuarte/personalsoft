import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { UsuarioDTO } from '../usuario';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  constructor(private router:Router,private usuarioService:UsuariosService) { }
  errores:string[]=[];
  ngOnInit(): void {

  }

    
  guardarCambios(usuario:UsuarioDTO):void
  {
      
      this.usuarioService.crear(usuario).subscribe(()=>{
        this.router.navigate(['/usuarios']);
      },
        (error)=>this.errores= parsearErroresAPI(error)
      );
      
     
  }
}
