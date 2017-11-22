export class Marker {
  lat: number;
  lng: number;
  label?: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
