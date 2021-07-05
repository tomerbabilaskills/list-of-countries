import { Component, OnInit, ViewChild } from '@angular/core';

import {} from 'google.maps';

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

  constructor() {}

  ngOnInit(): void {
    // Moveo location
    const moveoPosition = { lat: 32.06472745555116, lng: 34.771794568855235 };

    const mapProperties = {
      center: new google.maps.LatLng(moveoPosition),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    // Center the map at Moveo location
    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      mapProperties
    );

    // Add marker to Moveo location
    new google.maps.Marker({
      position: moveoPosition,
      map: this.map,
    });

    // Add autocomplete section
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteElement.nativeElement,
      {
        types: ['address'],
        fields: ['place_id', 'geometry', 'name'],
      }
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
}
