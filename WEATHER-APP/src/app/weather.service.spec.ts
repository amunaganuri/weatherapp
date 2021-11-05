import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherService);
  });

  /*

  { "coord": { "lon": 79.2833, "lat": 15.7333 }, "weather": [ { "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04n" } ], "base": "stations", "main": { "temp": 24.17, "feels_like": 24.99, "temp_min": 24.17, "temp_max": 24.17, "pressure": 1012, "humidity": 90, "sea_level": 1012, "grnd_level": 994 }, "visibility": 10000, "wind": { "speed": 2.46, "deg": 61, "gust": 5.43 }, "clouds": { "all": 94 }, "dt": 1636032683, "sys": { "country": "IN", "sunrise": 1635986435, "sunset": 1636027934 }, "timezone": 19800, "id": 1263504, "name": "Mārkāpur", "cod": 200, "image": "http://openweathermap.org/img/wn/04n@2x.png" }

  */

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
