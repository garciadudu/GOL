import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Airplane } from '../shared/airplane.model';
import { AirplaneService } from '../shared/airplane.service';

@Component({
  selector: 'airplane-insert',
  templateUrl: './airplane-insert.component.html'
})
export class AirplaneInsertComponent {
    constructor(private service: AirplaneService) { }

    ngOnInit() {
        this.service.refreshList();
    }

    adicionarAirplanes = function (airplane) {
        this.service.postAirplane(airplane);
     }
}
