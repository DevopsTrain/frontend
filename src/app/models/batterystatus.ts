export class BatteryStatus {
  status: number;
  vin: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
