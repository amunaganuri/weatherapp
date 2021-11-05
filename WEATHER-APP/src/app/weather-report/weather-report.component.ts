import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter, concatMap, tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { weatherSelector } from '../store/weather-report.selector';
import { WeatherReportModel } from '../store/weather-report.model';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss'],
})
export class WeatherReportComponent implements OnInit {
  data: any;

  today: Date = new Date();

  loading = false;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute,
    private store: Store<{ weather: WeatherReportModel }>
  ) {}

  ngOnInit() {
    this.store.pipe(select(weatherSelector)).subscribe((data: any) => {
      this.data = data['customerFeatureKey']['weather'];
    });
  }
}
