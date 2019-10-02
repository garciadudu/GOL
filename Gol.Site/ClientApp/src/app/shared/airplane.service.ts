import { Injectable } from '@angular/core';
import { Airplane } from './airplane.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AirplaneService { 

    formData : Airplane;
    list : Airplane[]; 
    readonly rootURL = "https://localhost:44325/airplane"

    constructor(private http: HttpClient) {
    }

    populateForm(airplane: Airplane) {
        this.formData = Object.assign({}, airplane);
    }

    getForm() {
       return this.formData; 
    }

    postAirplane(formData: Airplane) {
        // Http Headers
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        const body = JSON.stringify(formData);
        this.http.post(this.rootURL + '/InsereAirplane', body, httpOptions).subscribe(result => {
        }, error => console.error(error));
    }

    refreshList() {
        this.http.get(this.rootURL + '/ListaAirplane')
            .toPromise().then(res => this.list = res as Airplane[]);
    }

    putAirplanee(formData: Airplane) {
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        var body = JSON.stringify(formData);

        return this.http.post(this.rootURL + '/AlteraAirplane', body, httpOptions);

    }

    deleteAirplane(id: number) {
        return this.http.delete(this.rootURL + '/ExcluiAirplane/' + id);
    }
}
