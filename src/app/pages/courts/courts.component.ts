import {Component, OnInit} from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {Router, RouterLink} from "@angular/router";
import {MapComponent} from "../../components/map/map.component";
import { ObtaincourtsService } from '../../obtaincourts.service';

@Component({
  selector: 'app-courts',
  templateUrl: 'courts.component.html',
  styleUrls: ['courts.component.css'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, MapComponent]
})
export class CourtsComponent {
  locations: any[] = [];

  constructor(private title: Title, private meta: Meta, private router: Router) {
    this.title.setTitle('CourtLink Basketball: Canchas')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'CourtLink Basketball',
      },
    ])
  }

  irAPaginaDeAnadirCancha() {
    this.router.navigate(['/add_courts']);
  }
}
