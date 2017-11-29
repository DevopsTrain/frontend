export class Location {
  latitude: number;
  longitude: number;
  vin: string;
  timestamp: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
