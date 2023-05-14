import { Component, Input } from '@angular/core';
import { WeatherService } from '../shared/weather.service';
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent {
  constructor(private weatherService: WeatherService) {}
  weatherData: any;
  city:any;
  onInput(target: any) {
    this.city = target.value;
  }
  getWeather(): void {
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
