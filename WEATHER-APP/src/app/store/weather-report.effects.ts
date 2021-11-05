import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { WeatherService } from '../weather.service';
@Injectable()
export class WeatherEffect {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) {}

  loadWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Weather API Load]  Weather API Load'),
      mergeMap((data) =>
        this.weatherService
          .getWeatherForCity(data['city'])
          .pipe(
            map((data) => ({
              type: '[Weather API] Weather API Success',
              weather: data,
            }))
          )
      )
    )
  );
}
