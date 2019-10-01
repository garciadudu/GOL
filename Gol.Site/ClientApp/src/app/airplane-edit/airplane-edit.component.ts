import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'airplane-edit',
  templateUrl: './airplane-edit.component.html'
})
export class AirplaneEditComponent {
    private http: HttpClient;
    private baseUrl: string;

    constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
        this.http = http;
        this.baseUrl = baseUrl;
    }

    editatAirplanes = function (airplane) {
            // Http Headers
            var httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            };

            const body = JSON.stringify(airplane);

            this.http.post(this.baseUrl + 'Airplane/AlteraAirplane', body, httpOptions).subscribe(result => {
            }, error => console.error(error));
    }

    getAirplane(id: number) {
        return this.http.get<Airplane>(this.baseUrl + 'Airplane/' + id);
    }
}

interface Airplane {
    Id: number;
    CodigoAviao: string;
    Modelo: string;
    Passageiros: number;
    Criacao: string;
}
