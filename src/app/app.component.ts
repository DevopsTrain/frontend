import {Component, OnInit} from '@angular/core';
import {AgmCoreModule} from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 48.187498;
  lng: number = 11.601819;
  zoom: number = 15;
  label: string = 'Me';
  markers: Marker[] = [
    {
      lat: 51.673858,
      lng: 7.815982,
      label: 'A'
    },
    {
      lat: 51.373858,
      lng: 7.215982,
      label: 'B'
    },
    {
      lat: 51.723858,
      lng: 7.895982,
      label: 'C'
    }
  ];
  location = {};

  // sets the position of the user
  setPosition(position) {
    const location: Location = position.coords;
    this.lat = location.latitude;
    this.lng = location.longitude;
  }
  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
      navigator.geolocation.watchPosition(this.setPosition.bind(this));
    }
  }
}

interface Marker {
  lat: number;
  lng: number;
  label?: string;
}

interface Location {
  latitude: number;
  longitude: number;
}
