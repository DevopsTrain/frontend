export class BatteryStatus {
  status: number;
  vin: string;
  lastCheck: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
