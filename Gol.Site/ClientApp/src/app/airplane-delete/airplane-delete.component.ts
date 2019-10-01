import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'airplane-delete',
  templateUrl: './airplane-delete.component.html'
})
export class AirplaneDeleteComponent {
  public airplanes: Airplane[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
      http.get<Airplane[]>(baseUrl + 'Airplane/ListaAirplane').subscribe(result => {
          this.airplanes = result;
    }, error => console.error(error));
  }

  getAirplane(id: number, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    return http.get<Airplane>(baseUrl + 'Airplane/' + id);
 }
}

interface Airplane {
    id: number;
    codigoAviao: string;
    modelo: string;
    passageiros: number;
    criacao: string;
}
