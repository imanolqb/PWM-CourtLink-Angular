// @ts-ignore

import {Component, OnInit} from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {Router, RouterLink} from "@angular/router";
import {FormsModule, NgForm} from "@angular/forms";
import {MapComponent} from "../../components/map/map.component";
import {map} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-add-courts',
  templateUrl: 'add-courts.component.html',
  styleUrls: ['add-courts.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, MapComponent]
})
export class AddCourtsComponent implements OnInit {
  markerCoordinates: any;
  selectedLocation: string;
  imageUrl: string | ArrayBuffer | null = null;
  nombre: string;

  constructor(private title: Title, private meta: Meta, private router: Router) {
    this.title.setTitle('CourtLink Basketball: Añadir cancha');
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'CourtLink Basketball',
      },
    ]);
    this.selectedLocation = '';
    this.nombre = '';
  }

  ngOnInit(): void {
  }

  onSubmit(formularioCancha: NgForm): void {
    if (formularioCancha.invalid) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }
    this.router.navigate(['/canchas']).then();
  }

  protected readonly map = map;

  onMarkerPositionChanged(coordinates: any): void {
    this.markerCoordinates = coordinates.coordinates; // Actualizar las coordenadas seleccionadas
    this.selectedLocation = `${coordinates.coordinates.lat}, ${coordinates.coordinates.lng}`; // Actualizar la etiqueta de ubicación seleccionada
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
