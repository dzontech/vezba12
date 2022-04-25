import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CiService } from '../ci.service';
import { Ci } from '../models/ci';

@Component({
  selector: 'app-ci',
  templateUrl: './ci.component.html',
  styleUrls: ['./ci.component.css']
})
export class CiComponent implements OnInit {

  cii: Ci[] = [];

  constructor(private service: CiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const name = String(this.route.snapshot.paramMap.get('ci.name'));
    this.getCi(name);
  }

  getCi(name:string) {
    this.service.getCi(name).subscribe(data=>this.cii=data);
  }

}
