import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AirplaneService } from '../shared/airplane.service';
import { Airplane } from '../shared/airplane.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'airplane-delete',
  templateUrl: './airplane-delete.component.html'
})
export class AirplaneDeleteComponent {
  constructor(private service: AirplaneService,
      private toastr: ToastrService) { }

  public airplanes: Airplane[];

}
