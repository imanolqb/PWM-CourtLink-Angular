import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, NgOptimizedImage, FormsModule]
})
export class RegisterComponent implements OnInit {
  municipalitiesByIsland: { [key: string]: string[] } = {
    "isla1": ["Agaete", "Agüimes", "La Aldea de San Nicolás", "Artenara", "Arucas", "Firgas", "Gáldar", "Ingenio", "Mogán", "Moya", "Las Palmas de Gran Canaria", "San Bartolomé de Tirajana", "Santa Brígida", "Santa Lucía de Tirajana", "Santa María de Guía de Gran Canaria", "Tejeda", "Telde", "Teror", "Valleseco", "Valsequillo de Gran Canaria", "Vega de San Mateo"],
    "isla2": ["Adeje", "Arafo", "Arico", "Arona", "Buenavista del Norte", "Candelaria", "Fasnia", "Garachico", "Granadilla de Abona", "La Guancha", "Guía de Isora", "Güímar", "Icod de los Vinos", "La Matanza de Acentejo", "La Orotava", "Puerto de la Cruz", "Los Realejos", "El Rosario", "San Cristóbal de La Laguna", "San Juan de la Rambla", "San Miguel de Abona", "Santa Cruz de Tenerife", "Santa Úrsula", "Santiago del Teide", "El Sauzal", "Los Silos", "Tacoronte", "El Tanque", "Tegueste", "La Victoria de Acentejo", "Vilaflor"],
    "isla3": ["Barlovento", "Breña Alta", "Breña Baja", "Fuencaliente de la Palma", "Garafía", "Los Llanos de Aridane", "El Paso", "Puntagorda", "Puntallana", "San Andrés y Sauces", "Santa Cruz de la Palma", "Tazacorte", "Tijarafe", "Villa de Mazo"],
    "isla4": ["Antigua", "Betancuria", "La Oliva", "Pájara", "Puerto del Rosario", "Tuineje"],
    "isla5": ["La Frontera", "El Pinar de El Hierro", "Valverde"],
    "isla6": ["Agulo", "Alajeró", "Hermigua", "San Sebastián de la Gomera", "Valle Gran Rey", "Vallehermoso"],
    "isla7": ["Arrecife", "Haría", "San Bartolomé", "Teguise", "Tías", "Tinajo y Yaiza"],
    "isla8": ["Caleta de Sebo", "Pedro Barba"]
  };
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('CourtLink Basketball: Regístrate')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'CourtLink Basketball',
      },
    ])
  }

  ngOnInit(): void {
    this.updateMunicipalities();
  }

  loginUser() {
    window.location.href = '../homepage/homepage.html';
  }

  protected updateMunicipalities() {
    const islandSelect = document.getElementById('island') as HTMLSelectElement;
    const municipalitySelect = document.getElementById('municipality') as HTMLSelectElement;
    const selectedIsland: keyof typeof this.municipalitiesByIsland = islandSelect.value as keyof typeof this.municipalitiesByIsland;

    municipalitySelect.innerHTML = '';

    this.municipalitiesByIsland[selectedIsland].forEach(municipality => {
      const option = document.createElement('option');
      option.textContent = municipality;
      option.value = municipality;
      municipalitySelect.appendChild(option);
    });
  }
}

