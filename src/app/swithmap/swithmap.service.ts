import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, tap, map } from 'rxjs/operators';
import { Company } from './model/company';
import { Observable } from 'rxjs';
import { CompanyAdapter } from '../core/company.model';


@Injectable({
  providedIn: 'root'
})
export class SwithmapService {

  apiUrl = 'http://localhost:3000/data';


  constructor( private http: HttpClient,
               private adapter: CompanyAdapter) { }

  get(value): Observable<Company[]> {
    return this.http.get(this.apiUrl).pipe(
      map((data: any[]) =>
      data.filter(item => this.adapter.adapt(item).isActive === value).map(item => this.adapter.adapt(item))),
      tap(console.log)
    );
  }

}
