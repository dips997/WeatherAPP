import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../Models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WetharService {

  constructor(private http:HttpClient) { }

  getweatherData(cityName:string): Observable<WeatherData>{
    return this.http.get<WeatherData>('https://open-weather13.p.rapidapi.com/city/cityName',{
      // params : new HttpParams()
      // .set('',cityName),
      headers:new HttpHeaders()
      .set(environment.ApiKeyHeaderName,environment.ApiKeyHeaderValue)
      .set(environment.ApiHeaderName,environment.ApiHeaderValue)
      // params : new HttpParams()
      // .set('access_key',environment.ApiKeyHeaderValue)
      // .set('query',cityName)
    })
  }
}
