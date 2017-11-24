import {BatteryStatus} from './models/batterystatus';
import {Component, OnInit} from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import {Car} from './models/car';
import {Marker} from './models/marker';
import {Location} from './models/location';
import {CarService} from './services/car/car.service';
import {GeolocationService} from './services/geolocation/geolocation.service';
import {BatteryService} from './services/battery/battery.service';
import {MapsAPILoader} from '@agm/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CarService, GeolocationService, BatteryService]
})
export class AppComponent implements OnInit {
  title = 'DevOps - Showcase';
  lat: number = 48.187498;
  lng: number = 11.601819;
  zoom: number = 15;
  label: string = 'Me';
  showDirections: boolean = false;
  origin = {lat: 48.187498, lng: 11.601819};
  destination = {lat: 48.193936, lng: 11.571388};
  cars: Car[] = [];
  selectedCars: Car[] = [];
  location: Location = new Location({latitude: this.lat, longitude: this.lng});
  latlngBounds;

  constructor(private carService: CarService, private geolocationService: GeolocationService, private batteryService: BatteryService,
    private mapsAPILoader: MapsAPILoader) {}

  // Called when adding or removing a car
  getCarData(selectedCar: Car) {
    if (!this.selectedCars.includes(selectedCar)) {
      this.showDirections = true;
      this.calculateCarData(selectedCar, true);
    } else {
      const index = this.selectedCars.indexOf(selectedCar);
      this.selectedCars.splice(index, 1);
      this.calculateCenter();
    }
  }

  // Is executed by the interval check
  checkCarData() {
    for (const car of this.selectedCars) {
      this.calculateCarData(car, true);
    }
  }

  // Not in use
  calcRoute(vin: string) {
    this.origin.lat = this.location.latitude;
    this.origin.lng = this.location.longitude;

    const car = this.selectedCars.filter(data => data.vin === vin)[0];
    this.destination.lat = car.location.latitude;
    this.destination.lng = car.location.longitude;

    this.showDirections = true;
  }

  // Calculates the location and battery-status of the car and updates the map
  calculateCarData(selectedCar: Car, recalculate: boolean) {
    const vin = selectedCar.vin;

    // First fetch the location of the car
    this.geolocationService.fetchGeolocationByVin(vin).subscribe(res => {
      // selectedCar.location = res[0].filter(data => data.vin === vin)[0];
      selectedCar.location = new Location({latitude: res[0].latitude, longitude: res[0].longitude, vin: res[0].vin});

      // Then get battery-status of the car
      this.batteryService.fetchBatteryStatusByVin(vin).subscribe(resp => {
        // selectedCar.batteryStatus = resp[0].filter(data => data.vin === vin)[0];
        selectedCar.batteryStatus = new BatteryStatus({status: resp[0].chargedPercentage, vin: resp[0].vin17});

        // Add to selected cars and update the center of the map
        this.selectedCars.push(selectedCar);

        if (recalculate) {
          this.calculateCenter();
          this.showDirections = false;
        }
      });
    });
  }

  // Recalculates the center of the map if a car was added or removed
  calculateCenter() {
    this.mapsAPILoader.load().then(() => {
      this.latlngBounds = new window['google'].maps.LatLngBounds();
      this.latlngBounds.extend(new window['google'].maps.LatLng(this.location.latitude, this.location.longitude));
      this.selectedCars.forEach((car) => {
        this.latlngBounds.extend(new window['google'].maps.LatLng(car.location.latitude, car.location.longitude));
      });
    });
  }

  // Sets the position of the user
  setPosition(position) {
    const coords = position.coords;
    this.location.latitude = coords.latitude;
    this.location.longitude = coords.longitude;

  }

  // Init
  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
      navigator.geolocation.watchPosition(this.setPosition.bind(this));
    }

    // Get cars
    this.carService.fetchCars().subscribe(res => {
      for (const c of res[0]) {
        const car: Car = new Car({name: c.name, vin: c.vin});
        this.cars.push(car);
      }
    });

    // Check every 2 minutes the data (location, battery) for every selected car
    Observable.interval(2000 * 60).subscribe(x => {
      this.checkCarData();
    });
  }
}
