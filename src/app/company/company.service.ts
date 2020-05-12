import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  apiUrl = 'http://localhost:3000/data';
  constructor( private server: HttpClient) { }


}
