export interface TimeData {
    type: string;
    h?: string;
    datetime: string;
    value?: string;
    celcius?: string;
    fahrenheit?: string;
    code?: string;
    name?: string;
    deg?: string;
    card?: string;
    sexa?: string;
    kt?: string;
    mph?: string;
    kph?: string;
    ms?: string;
  }
  
  export interface WeatherParam {
    id: string;
    description: string;
    type: string;
    times: any[];
  }
  
  export interface WeatherData {
    id: string;
    latitude: string;
    longitude: string;
    coordinate: string;
    type: string;
    region: string;
    level: string;
    description: string;
    domain: string;
    tags: string;
    params: WeatherParam[];
  }