import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import moment from 'moment';

@Component({
  selector: 'app-weather-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']  // Corrected to styleUrls
})
export class WeatherAppComponent {
  cityName: string = 'pune';
  weatherData: any;
  iconUrl: string = '';
  currentDate: string = '';
  loading: boolean = false;
  error: string = '';

  private url = 'https://api.openweathermap.org/data/2.5/weather';
  private apikey = 'f00c38e0279b7bc85480c3fe775d518c';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    this.loading = true;
    this.error = '';
    const fullUrl = `${this.url}?q=${this.cityName}&appid=${this.apikey}&units=metric`;

    this.http.get(fullUrl).subscribe(
      (data: any) => {
        this.weatherData = data;
        this.iconUrl = data.weather?.[0]?.icon
          ? `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
          : ''; // Use optional chaining for safe access
        this.currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
        document.getElementById('weather-info')?.style.setProperty('display', 'block'); // Corrected ID
        this.loading = false;
      },
      (error) => {
        this.error = 'City not found. Please try again.';
        this.loading = false;
        console.log('Error fetching weather data:', error);
      }
    );
  }
}
