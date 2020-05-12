import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RocketService {
  private rocketsApi = 'https://launchlibrary.net/1.4/';
  public nextLaunches$: Observable<any> = null;

  constructor(private http: HttpClient) { }

   getNextLaunches(): Observable<any> {
    const url = 'https://launchlibrary.net/1.4/launch/next/5';
    return this.http.get <any>(url);
  }
}
