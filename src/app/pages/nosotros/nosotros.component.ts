import { Component, OnInit } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {HeaderComponent} from "../../header/header.component";
import {FooterComponent} from "../../footer/footer.component";
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-nosotros',
  templateUrl: 'nosotros.component.html',
  styleUrls: ['nosotros.component.css'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, NgOptimizedImage]
})
export class NosotrosComponent {

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('CourtLink Basketball: Nosotros')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'CourtLink Basketball',
      },
    ])
  }
}
