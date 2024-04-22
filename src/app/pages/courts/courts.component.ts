import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {HeaderComponent} from "../../header/header.component";
import {FooterComponent} from "../../footer/footer.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'courts.component.html',
  styleUrls: ['courts.component.css'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink]
})
export class CourtsComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('CourtLink Basketball: Canchas')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'CourtLink Basketball',
      },
    ])
  }
}
