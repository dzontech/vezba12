import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ci } from './models/ci';

@Injectable({
  providedIn: 'root'
})
export class CiService {

  private urlCi = 'https://restcountries.com/v2/name/';
  private urlCi2 = '?fields=name,capital,population,area,flag,region'

  constructor(private http: HttpClient) { }

  getCi(name: string):Observable<Ci[]> {
    return this.http.get<Ci[]>(this.urlCi+name+this.urlCi2)
  }
}
