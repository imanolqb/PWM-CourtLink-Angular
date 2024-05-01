import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {Add_match_buttonComponent} from "../../components/add_match_button/add_match_button.component";
import {Filter_buttonComponent} from "../../components/filter_button/filter_button.component";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'matches.component.html',
  styleUrls: ['matches.component.css'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, Add_match_buttonComponent, Filter_buttonComponent]
})
export class MatchesComponent {
  constructor(private title: Title, private meta: Meta, private router: Router) {
    this.title.setTitle('CourtLink Basketball: Partidos')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'CourtLink Basketball',
      },
    ])
  }
}
