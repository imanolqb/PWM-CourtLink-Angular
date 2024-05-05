import {Component, AfterViewInit, PLATFORM_ID, Inject, Output, EventEmitter, Input} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  standalone: true,
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  @Input() locations: any[] = [];

  map: any; // Referencia al objeto de mapa
  marker: any; // Referencia al objeto de marcador

  @Output() markerPositionChanged = new EventEmitter<any>(); // Evento para enviar las coordenadas del marcador al componente padre

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('leaflet').then(L => {
        this.initMap(L);
      }).catch(error => {
        console.error('Error loading Leaflet', error);
      });
    }
  }

  private initMap(L: any): void {
    this.map = L.map('map', {
      center: [28.0, -15.6],
      zoom: 10
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    this.locations.forEach(location => {
      L.marker(location).addTo(this.map);
    });

    // Añadir el marcador inicial
    this.marker = L.marker([28.0, -15.6]).addTo(this.map);

    this.map.on('click', (event: any) => {
      const { lat, lng } = event.latlng; // Obtener las coordenadas del clic
      this.marker.setLatLng([lat, lng]); // Mover el marcador a la posición del clic
      this.markerPositionChanged.emit({ coordinates: { lat, lng } }); // Emitir un evento con las coordenadas del clic
    });

  }

  // Método para mover el marcador a una nueva posición
  moveMarker(newCoordinates: { lat: number, lng: number }): void {
    if (this.marker) {
      this.marker.setLatLng([newCoordinates.lat, newCoordinates.lng]);
    }
  }
}
