import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Actions, Navigations } from './header.component';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor(private http: HttpClient) {}

  getActions(): Observable<Actions[]> {
    return this.http.get<Actions[]>('/assets/mocks/actions.json');
  }

  getNavigations(): Observable<Navigations[]> {
    return this.http.get<Navigations[]>('/assets/mocks/navigations.json');
  }
}
