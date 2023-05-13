import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKey = 'd01c359cbe6c09a550d3bf235e96fe9f';
  constructor(private http: HttpClient) {}
  getWeather(city: string): Observable<any> {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
    return this.http.get(apiUrl);
  }
}
