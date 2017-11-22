export class Location {
  latitude: number;
  longitude: number;
  vin: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
