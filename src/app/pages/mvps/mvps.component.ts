import { Component, OnInit } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {RouterLink} from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mvps',
  templateUrl: 'mvps.component.html',
  styleUrls: ['mvps.component.css'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink]
})
export class MvpsComponent {

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('CourtLink Basketball: MVPs')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'CourtLink Basketball',
      },
    ])
  }
}
