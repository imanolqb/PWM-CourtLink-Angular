import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, NgOptimizedImage]
})
export class LoginComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('CourtLink Basketball: Iniciar Sesión')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'CourtLink Basketball',
      },
    ])
  }

  loginUser() {
    window.location.href = '../homepage/homepage.html';
  }

  /*
  toggleMenu() {
    const burgerButton = this.elementRef.nativeElement.querySelector('#burger-button');
    const menu = this.elementRef.nativeElement.querySelector('#myLinks');
    burgerButton.classList.toggle('change'); // Toggle CSS class for burger button
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  }
   */
}
