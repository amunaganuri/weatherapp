import { createAction, props } from '@ngrx/store';
import { WeatherReportModel } from './weather-report.model';

export const retrieveWeatherInfoLoad = createAction(
  '[Weather API Load]  Weather API Load',
  props<{ city: string }>()
);
export const retrieveWeatherInfo = createAction(
  '[Weather API] Weather API Success',
  props<{ weather: WeatherReportModel }>()
);
