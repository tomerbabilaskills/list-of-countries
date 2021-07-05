import { Component, OnInit, ViewChild } from '@angular/core';

import {} from 'google.maps';

import { mapStyle } from '../../mapStyle';

@Component({
  selector: 'app-maps-page',
  templateUrl: './maps-page.component.html',
  styleUrls: ['./maps-page.component.scss'],
})
export class MapsPageComponent implements OnInit {
  @ViewChild('map', { static: true }) mapElement: any;
  @ViewChild('autocomplete', { static: true }) autocompleteElement: any;

  map!: google.maps.Map;
  autocomplete!: google.maps.places.Autocomplete;
  directionsService!: google.maps.DirectionsService;
  directionsRenderer!: google.maps.DirectionsRenderer;

  isRouteShow: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // Moveo location
    const moveoPosition = { lat: 32.06472745555116, lng: 34.771794568855235 };

    // My style
    const styledMapType = new google.maps.StyledMapType(mapStyle, {
      name: 'My Style',
    });

    // Set properties to the map
    const mapProperties = {
      center: new google.maps.LatLng(moveoPosition),
      zoom: 15,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'hybrid', 'mapStyle'],
      },
    };

    // Create map
    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      mapProperties
    );

    // Create directionsRenderer and directionService
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();

    // Add my style to the map
    this.map.mapTypes.set('mapStyle', styledMapType);
    this.map.setMapTypeId('roadmap'); // Set roadmap to default

    // Add marker to Moveo location
    new google.maps.Marker({
      position: moveoPosition,
      map: this.map,
    });

    // Add autocomplete section
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteElement.nativeElement,
      { types: ['address'], fields: ['place_id', 'geometry', 'name'] }
    );

    // Re-center and create a new marker at the chosen location
    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete.getPlace();
      if (!place.geometry) {
        console.log('Place not found');
      } else {
        new google.maps.Marker({
          position: place.geometry.location,
          map: this.map,
        });
        this.map.setCenter(place.geometry.location!);
      }
      this.autocompleteElement.nativeElement.value = '';
    });
  }

  showRoute() {
    const myHousePosition = { lat: 31.963706524772967, lng: 34.81632252652455 };
    const moveoPosition = { lat: 32.06472745555116, lng: 34.771794568855235 };
    const request = {
      origin: myHousePosition,
      destination: moveoPosition,
      travelMode: 'DRIVING' as google.maps.TravelMode,
    };

    if (!this.isRouteShow) {
      this.directionsService.route(request, (result, status) => {
        if (status == 'OK') {
          this.directionsRenderer.setMap(this.map);
          this.directionsRenderer.setDirections(result);
        }
      });
    } else {
      this.directionsRenderer.setMap(null);
      this.map.setCenter(moveoPosition);
    }

    this.isRouteShow = !this.isRouteShow;
  }
}
