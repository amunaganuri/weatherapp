import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import {
  retrieveWeatherInfo,
  retrieveWeatherInfoLoad,
} from './store/weather-report.actions';
import { WeatherReportModel } from './store/weather-report.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cityTextControl: FormControl;
  constructor(
    private router: Router,
    private store: Store<{ weather: WeatherReportModel }>
  ) {
    this.cityTextControl = new FormControl('');
  }

  getWeatherInfo() {
    this.store.dispatch(
      retrieveWeatherInfoLoad({ city: this.cityTextControl.value })
    );
  }
  ngOnDestroy() {}
}
