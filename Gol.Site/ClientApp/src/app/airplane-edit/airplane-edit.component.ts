import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AirplaneService } from 'src/app/shared/airplane.service';
import { Airplane } from 'src/app/shared/airplane.model';

@Component({
  selector: 'airplane-edit',
  templateUrl: './airplane-edit.component.html'
})
export class AirplaneEditComponent implements OnInit  {

    constructor(private service: AirplaneService) { }

    ngOnInit() {
        this.service.formData;
    }

    onSubmit(form: NgForm) {
        this.updateRecord(form);
    }


    updateRecord(form: NgForm) {
        this.service.putAirplanee(form.value).subscribe(res => {
            this.service.refreshList();
        });
    }

}
