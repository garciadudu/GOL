import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'airplane',
  templateUrl: './airplane.component.html'
})
export class AirplaneComponent {
  public airplanes: Airplane[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
      http.get<Airplane[]>(baseUrl + 'Airplane/ListaAirplane').subscribe(result => {
          this.airplanes = result;
    }, error => console.error(error));
  }
}

interface Airplane {
    id: number;
    codigoAviao: string;
    modelo: string;
    passageiros: number;
    criacao: string;
}
