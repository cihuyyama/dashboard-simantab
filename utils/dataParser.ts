// utils/dataParser.ts
import { WeatherData, WeatherParam } from '../types/type';

interface ParsedWeatherData {
  humidity: WeatherParam;
  temperature: WeatherParam;
  windSpeed: WeatherParam;
  weather: WeatherParam;
}

interface WeatherParamWithTimes extends WeatherParam {
  times: any[];
}

export const parseWeatherData = (data: WeatherData): ParsedWeatherData => {
  const parsedData = {
    humidity: { id: '', description: '', type: '', times: [] } as WeatherParamWithTimes,
    temperature: { id: '', description: '', type: '', times: [] } as WeatherParamWithTimes,
    windSpeed: { id: '', description: '', type: '', times: [] } as WeatherParamWithTimes,
    weather: { id: '', description: '', type: '', times: [] } as WeatherParamWithTimes,
    windDirection: { id: '', description: '', type: '', times: [] } as WeatherParamWithTimes,
  };

  data.params.forEach(param => {
    if (param.id === 'hu') {
      parsedData.humidity = param as WeatherParamWithTimes;
    } else if (param.id === 't') {
      parsedData.temperature = param as WeatherParamWithTimes;
    } else if (param.id === 'ws') {
      parsedData.windSpeed = param as WeatherParamWithTimes;
    } else if (param.id === 'weather') {
      parsedData.weather = param as WeatherParamWithTimes;
    } else if (param.id === 'wd') {
      parsedData.windDirection = param as WeatherParamWithTimes;
    }
  });

  return parsedData;
};