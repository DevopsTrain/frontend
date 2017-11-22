import {Location} from './location';
import {BatteryStatus} from './batterystatus';

export class Car {
  name: string;
  vin: string;
  location?: Location;
  batteryStatus?: BatteryStatus;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
