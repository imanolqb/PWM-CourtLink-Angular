import {Component, ElementRef} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private elementRef: ElementRef, private router: Router) {}

  irAPaginaDeInicio(target: 'login' | 'homepage') {
    if (target === 'login') {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/']);
    }
  }

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
}
