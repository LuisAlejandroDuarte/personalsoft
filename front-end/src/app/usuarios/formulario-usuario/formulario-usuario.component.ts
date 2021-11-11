import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioDTO } from '../usuario';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {


  constructor(private formBuilder: FormBuilder) { }
  form:FormGroup;

  @Input()
  titulo:string;

  @Input()
  modelo:UsuarioDTO;

  @Input()
  errores:string[]=[];

  @Output()
  onSubmit:EventEmitter<UsuarioDTO> = new EventEmitter<UsuarioDTO>();

  ngOnInit(): void {
    this.form = this.form=this.formBuilder.group({
      id:[0,
      {
      }],
      user:['',
      {
        validators: [Validators.required]
      }],
      nombre:['',
      {
        validators: [Validators.required]
      }],
      apellido:['',
      {
        validators: [Validators.required]
      }],
      email:['',
      {
        validators: [Validators.required]
      }],
      activo:[true,{}]


    });


        if (this.modelo) {
          this.form.patchValue(this.modelo);
        }

  }

  guardarCambios():void {

    // if (this.form.get('activo').value=="1")
    //   this.form.setValue({activo:true});
    //  else
    //  this.form.setValue({activo:false});

    this.onSubmit.emit(this.form.value);
  }

}
