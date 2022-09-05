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

  weatherData!: WeatherData
  ngOnInit(): void {
    this.weatherservice.getweatherData('Londan').subscribe({
      next: (response)  => {
        this.weatherData = response
        console.log(response);
      }
    })
  }

}
