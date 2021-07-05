import { Component, OnInit, ViewChild } from '@angular/core';

import {} from 'google.maps';

@Component({
  selector: 'app-maps-page',
  templateUrl: './maps-page.component.html',
  styleUrls: ['./maps-page.component.scss'],
})
export class MapsPageComponent implements OnInit {
  @ViewChild('map', { static: true }) mapElement: any;
  map!: google.maps.Map;
  constructor() {}

  ngOnInit(): void {
    const moveoPosition = { lat: 32.06472745555116, lng: 34.771794568855235 };
    const mapProperties = {
      center: new google.maps.LatLng(moveoPosition),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      mapProperties
    );

    const marker = new google.maps.Marker({
      position: moveoPosition,
      map: this.map,
    });
  }
}
