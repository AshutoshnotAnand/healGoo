import { AfterViewInit, Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  imports:[MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements AfterViewInit{
  map!: L.Map;

  ngAfterViewInit() {
    this.map = L.map('map').setView([28.6139, 77.2090], 12); // Default to Delhi

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(this.map);

    // Add a marker on click
    this.map.on('click', (event: any) => {
      const { lat, lng } = event.latlng;
      L.marker([lat, lng]).addTo(this.map).bindPopup(`Lat: ${lat}, Lng: ${lng}`).openPopup();
    });
  }
  
}
