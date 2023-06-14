import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeContent } from '../interfaces/HomeContent';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseApiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getMenuData(): Observable<HomeContent[]> {
    return this.http.get<HomeContent[]>(this.baseApiUrl);
  }
}
