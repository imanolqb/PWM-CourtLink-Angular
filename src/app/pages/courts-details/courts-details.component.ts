import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-courts',
  templateUrl: 'courts-details.component.html',
  styleUrls: ['courts-details.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class CourtsDetailsComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('CourtLink Basketball: Detalles de la cancha')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'CourtLink Basketball',
      },
    ])
  }
}
