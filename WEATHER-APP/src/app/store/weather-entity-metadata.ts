import { EntityMetadataMap } from '@ngrx/data';
import { WeatherReportModel } from './weather-report.model';

export const weatherEntityMetaData: EntityMetadataMap = {
    weather: {
    selectId: (weather: WeatherReportModel) => weather.name,
  },
};
