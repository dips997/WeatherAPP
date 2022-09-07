import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../Models/weather.model';
import { WetharService } from '../Services/wethar.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherservice:WetharService) { }



  Rain = "Rain" ; 

  days:any
  today:any;
  cityName:string = 'Palanpur';
  weatherData!: WeatherData
  Latitude!:string;
  Longitude!:string;



  ngOnInit(): void {
    this.watchPosition();
    this.getWeatherData(this.cityName);
    this.cityName="";
    this. days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.today = new Date();
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = "";
  }

  private getWeatherData(cityName:string){
    this.weatherservice.getweatherData(cityName).subscribe({
      next: (response)  => {
        this.weatherData = response
        console.log(response);
      }
    })
  }

  lt:any;
  lng:any;
  
  getWeatherDataWithLocation(lat: any, lang: any) {
    this.weatherservice.getWeatherDataWithLocation(lat, lang).subscribe({
      next: (response:any) => {
        this.weatherData = response;
        console.log(response);
      }
    })
  }

 watchPosition() {
    navigator.geolocation.watchPosition((position) => {
      this.lt = position.coords.latitude;
      this.lng = position.coords.longitude;
      console.log(`lat: ${position.coords.latitude}, lang: ${position.coords.longitude}`)
      this.getWeatherDataWithLocation(this.lt, this.lng);
    },(err)=>{
      console.log(err);
      alert('Please Allow GPS to get your current location ')
    },{
      enableHighAccuracy:true,
      // timeout:5000,
      // maximumAge:5000
    })
  }
}
