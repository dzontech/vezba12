import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Co } from './models/co';

@Injectable({
  providedIn: 'root'
})
export class CoService {

  private urlCo = 'https://restcountries.com/v2/all?fields=name,capital,population,area,flag,region';

  constructor(private http: HttpClient) { }

  getCo():Observable<Co[]> {
    return this.http.get<Co[]>(this.urlCo);
  }
}
