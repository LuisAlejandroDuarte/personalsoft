import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { UsuarioDTO } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  constructor(private http:HttpClient) { }

  private apiURL:string = environment.apiURL + 'usuarios';

  public obtenerTodos(pagina:number,cantidadElementosAMostrar:number): Observable<any> {
    let params= new HttpParams();
    params=params.append('pagina',pagina.toString());
    params=params.append('recordsPorPagina',cantidadElementosAMostrar.toString());
   return this.http.get<UsuarioDTO[]>(this.apiURL, {observe:'response',params});
  }

  public obteenrPorId(id:number):Observable<UsuarioDTO> {
    return this.http.get<UsuarioDTO>(`${this.apiURL}/${id}`);
  }


  public crear(usuario:UsuarioDTO) {
    return this.http.post(this.apiURL,usuario);
  }

  public editar (id:number,usuario:UsuarioDTO)
  {
    return this.http.put(`${this.apiURL}/${id}`,usuario);
  }

  public borrar(id:number)
  {
      return this.http.delete(`${this.apiURL}/${id}`);
  }

}
