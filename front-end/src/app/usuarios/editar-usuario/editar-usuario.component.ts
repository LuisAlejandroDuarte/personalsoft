import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { UsuarioDTO } from '../usuario';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

 
  constructor(private router:Router,
    private usuarioService:UsuariosService,
    private activatedRoute:ActivatedRoute) { }

  modelo:UsuarioDTO;
  errores:string[]=[];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=> {
      this.usuarioService.obteenrPorId(params.id).subscribe(usuario=>{
        this.modelo=usuario;
      },()=>this.router.navigate(['/usuarios']))
    })
  }

  guardarCambios(usuario:UsuarioDTO) {
    this.usuarioService.editar(this.modelo.id,usuario).subscribe(()=>{
      this.router.navigate(['/usuarios']);
    },error=>this.errores= parsearErroresAPI(error))
    
  }

}
