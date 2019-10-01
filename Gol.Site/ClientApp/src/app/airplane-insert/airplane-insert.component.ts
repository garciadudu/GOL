import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';


@Component({
  selector: 'airplane-insert',
  templateUrl: './airplane-insert.component.html'
})
export class AirplaneInsertComponent {
    private http: HttpClient;
    private baseUrl: string;

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.http = http;
        this.baseUrl = baseUrl;
    }

    adicionarAirplanes = function (airplane) {
        // Http Headers
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        const body = JSON.stringify(airplane);
        this.http.post(this.baseUrl + 'Airplane/InsereAirplane', body, httpOptions).subscribe(result => {
        }, error => console.error(error));
     }

}

interface Airplane {
    Id: number;
    CodigoAviao: string;
    Modelo: string;
    Passageiros: number;
    Criacao: string;
}
