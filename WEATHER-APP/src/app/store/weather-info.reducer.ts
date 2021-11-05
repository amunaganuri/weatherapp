import { Action, createReducer, on } from '@ngrx/store';
import { WeatherReportModel } from './weather-report.model';

import * as weatherActions from './weather-report.actions';

export const customerFeatureKey = 'customer';
export interface WeatherState {
  weather: WeatherReportModel | undefined;
}
export interface state extends WeatherState {}
export const initialState: WeatherState = {
  weather: undefined,
};

export const customerReducer = createReducer(
  initialState,
  on(weatherActions.retrieveWeatherInfoLoad, (state, action) => ({
    ...state,
  })),
  on(weatherActions.retrieveWeatherInfo, (state, action) => ({
    ...state,
    weather: action.weather,
  }))
);
export function weatherInfoReducer(
  state: WeatherState | undefined,
  action: Action
): any {
  return customerReducer(state, action);
}
