import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {HomepageComponent} from "../../components/homepage/homepage.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, HomepageComponent]
})
export class HomeComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('CourtLink Basketball: Inicio')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'CourtLink Basketball',
      },
    ])
  }
}
