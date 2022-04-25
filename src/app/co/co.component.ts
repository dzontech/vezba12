import { Component, OnInit } from '@angular/core';
import { CoService } from '../co.service';
import { Co } from '../models/co';

@Component({
  selector: 'app-co',
  templateUrl: './co.component.html',
  styleUrls: ['./co.component.css']
})
export class CoComponent implements OnInit {

  coo: Co[] = [];

  constructor(private service: CoService) { }

  ngOnInit(): void {
    this.getCo();
  }

  getCo() {
    this.service.getCo().subscribe(data=>this.coo=data);
  }

}
