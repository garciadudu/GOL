import { Component, OnInit } from '@angular/core';
import { AirplaneService } from 'src/app/shared/airplane.service';
import { Airplane } from 'src/app/shared/airplane.model';

@Component({
  selector: 'airplane-list',
    templateUrl: './airplane-list.component.html'
})
export class AirplaneListComponent implements OnInit {

    constructor(private service: AirplaneService) { }

    ngOnInit() {
        this.service.refreshList();
    }

    deleteAirplane(id: number) {
        if (confirm('Confirma a exclusão do airplane?')) {
            this.service.deleteAirplane(id).subscribe(res => {
                this.service.refreshList();
                alert('registro apagado00;')
            });
        }
    }

}
