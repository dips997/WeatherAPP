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
    let a = cityName;
    console.log(a);
    return this.http.get<WeatherData>('https://weatherapi-com.p.rapidapi.com/forecast.json',{
      params : new HttpParams()
      .set('q',cityName)
      .set('days',5),
      headers:new HttpHeaders()
      .set('X-RapidAPI-Key','23f463a106msh4387186b9cf342ep14429djsn453d3d79a887')
      .set('X-RapidAPI-Host','weatherapi-com.p.rapidapi.com')
    })
   
  }

  getWeatherDataWithLocation(lat:any,lng:any): Observable<WeatherData>{
  
    return this.http.get<WeatherData>('https://weatherapi-com.p.rapidapi.com/forecast.json',{
      params : new HttpParams()
   
      .set('q',`${lat},${lng}`)
      .set('days',5),
      headers:new HttpHeaders()
      .set('X-RapidAPI-Key','23f463a106msh4387186b9cf342ep14429djsn453d3d79a887')
      .set('X-RapidAPI-Host','weatherapi-com.p.rapidapi.com')
    })
   
  }


}
