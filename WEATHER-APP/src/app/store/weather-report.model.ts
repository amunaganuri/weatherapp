export interface Coordinates {
  lon: number;
  lat: number;
}
export interface WeatherInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface WeatherCondition {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}
export interface WindCoordinates {
  speed: number;
  deg: number;
  gust: number;
}
export interface CloudInfo {
  all: 94;
}
export interface SysInfo {
  country: string;
  sunrise: number;
  sunset: number;
}
export interface WeatherReportModel {
  coord: Coordinates;
  weather: WeatherInfo[];
  base: string;
  main: WeatherCondition;
  visibility: number;
  wind: WindCoordinates;
  clouds: CloudInfo;
  dt: number;
  sys: SysInfo;
  timezone: number;
  id: number;
  name: string;
  cod: number;
  image: string;
}
