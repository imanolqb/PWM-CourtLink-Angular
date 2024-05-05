import {Component, OnInit, ViewChild} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {Router, RouterLink} from "@angular/router";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, NgOptimizedImage, FormsModule, NgForOf, NgIf]
})
export class RegisterComponent implements OnInit {
  selectedIsland: string;
  selectedMunicipality: string;
  nombre: string;
  apellido: string;
  correo: string;
  passwd: string;

  islands = [
    { label: 'Gran Canaria', value: 'isla1' },
    { label: 'Tenerife', value: 'isla2' },
    { label: 'La Palma', value: 'isla3' },
    { label: 'Fuerteventura', value: 'isla4' },
    { label: 'El Hierro', value: 'isla5' },
    { label: 'La Gomera', value: 'isla6' },
    { label: 'Lanzarote', value: 'isla7' },
    { label: 'La Graciosa', value: 'isla8' }
  ];

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
  constructor(private title: Title, private meta: Meta, private router: Router) {
    this.title.setTitle('CourtLink Basketball: Regístrate')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'CourtLink Basketball',
      },
    ])
    this.selectedIsland = '';
    this.selectedMunicipality = '';
    this.nombre = '';
    this.apellido = '';
    this.correo = '';
    this.passwd = '';
  }

  ngOnInit(): void {
    this.selectedIsland = this.islands[0].value;
    this.updateMunicipalities();
  }

  routeToHomepage(form: NgForm) {
    if (form.valid) {
      // El formulario es válido, continuar con la navegación
      this.router.navigateByUrl('/');
    } else {
      // Mostrar un mensaje o realizar alguna acción para indicar que hay campos incompletos
      alert('Por favor complete todos los campos obligatorios.');
    }
  }

  updateMunicipalities(): void {
    this.selectedMunicipality = ''; // Limpiar el valor seleccionado del municipio
    if (this.selectedIsland) {
      // Obtener la lista de municipios para la isla seleccionada
      const municipalities = this.municipalitiesByIsland[this.selectedIsland];
      if (municipalities && municipalities.length > 0) {
        this.selectedMunicipality = municipalities[0];
      }
    }
  }
}

