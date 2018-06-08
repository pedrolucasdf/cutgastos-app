import { Eletrodomestico } from './../../models/eletrodomestico';
import { Observable } from 'rxjs/Rx';
import { API_ENDPOINT } from './../../utils/constants';
import { JsonReturn } from './../../models/jsonReturn';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario';

/*
  Generated class for the EletrodomesticoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EletrodomesticoServiceProvider {


  constructor(public http: HttpClient) {
    console.log('Hello EletrodomesticoServiceProvider Provider');
  }

  getEletrodomesticos(): Observable<JsonReturn>{
    return this.http.get<JsonReturn>(API_ENDPOINT+"eletrodomestico");
  }

  getEletrodomesticoByID(eletrodomestico: Eletrodomestico): Observable<JsonReturn>{
    return this.http.get<JsonReturn>(API_ENDPOINT+"eletrodomestico?id="+eletrodomestico.id);
  }

  getEletrodomesticoByUsuario(usuario: Usuario): Observable<JsonReturn>{
    return this.http.get<JsonReturn>(API_ENDPOINT+"eletrodomestico?usuario_id="+usuario.id);
  }

  getEletrodomesticoByPotencia(usuario: Usuario, eletrodomestico: Eletrodomestico): Observable<JsonReturn>{
    return this.http.get<JsonReturn>(API_ENDPOINT+"eletrodomestico?usuario_id="+usuario.id+"&potencia_uso="+eletrodomestico.potenciaUso);
  }

  createEletrodomestico(eletrodomestico: Eletrodomestico): Observable<JsonReturn>{
    return this.http.post<JsonReturn>(API_ENDPOINT+"eletrodomestico", eletrodomestico);
  }

  updateEletrodomestico(eletrodomestico: Eletrodomestico): Observable<JsonReturn>{
    return this.http.put<JsonReturn>(API_ENDPOINT+"eletrodomestico?id="+eletrodomestico.id, eletrodomestico);
  }

  deleteEletrodomestico(eletrodomestico: Eletrodomestico): Observable<JsonReturn>{
    return this.http.delete<JsonReturn>(API_ENDPOINT+"eletrodomestico?id="+eletrodomestico.id);
  }

  

}
