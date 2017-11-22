import {GoogleMapsAPIWrapper} from '@agm/core/services/google-maps-api-wrapper';
import {Directive, Input, OnInit} from '@angular/core';
declare var google: any;

@Directive({
  selector: '[appDirections]'
})
export class DirectionDirectivesMapDirective implements OnInit {
  @Input() origin;
  @Input() destination;

  constructor(private gmapsApi: GoogleMapsAPIWrapper) {}

  ngOnInit() {
    this.gmapsApi.getNativeMap().then(map => {
      const directionsService = new google.maps.DirectionsService;
      const directionsDisplay = new google.maps.DirectionsRenderer;

      directionsDisplay.setMap(map);
      const request = {
        origin: this.origin,
        destination: this.destination,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
      };
      directionsService.route(request, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          console.log(response);
          window.alert('Directions request failed due to ' + status);
        }
      });

    });
  }
}
