import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {HeaderComponent} from "../../header/header.component";
import {FooterComponent} from "../../footer/footer.component";
import {Add_match_buttonComponent} from "../../add_match_button/add_match_button.component";
import {Filter_buttonComponent} from "../../filter_button/filter_button.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'matches.component.html',
  styleUrls: ['matches.component.css'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, Add_match_buttonComponent, Filter_buttonComponent]
})
export class MatchesComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('CourtLink Basketball: Partidos')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'CourtLink Basketball',
      },
    ])
  }
}
