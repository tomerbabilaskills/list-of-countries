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
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      mapProperties
    );
  }
}
