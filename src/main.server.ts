import { bootstrapApplication } from '@angular/platform-browser';

import { config } from './app/app.config.server';
import { WeatherAppComponent } from './app/weather-app/weather-app.component';

const bootstrap = () => bootstrapApplication(WeatherAppComponent, config);

export default bootstrap;
