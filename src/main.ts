import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';


import { WeatherAppComponent } from './app/weather-app/weather-app.component';

bootstrapApplication(WeatherAppComponent, appConfig)
  .catch((err) => console.error(err));
