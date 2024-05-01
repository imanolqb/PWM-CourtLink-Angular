import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-add-match-button',
  standalone: true,
  imports: [
    NgOptimizedImage, RouterLink
  ],
  templateUrl: './add_match_button.component.html',
  styleUrl: './add_match_button.component.css'
})
export class Add_match_buttonComponent {

  constructor(private router: Router) {
  }

  irAPaginaDeAnadirPartido() {
    this.router.navigate(['/add_match']);
  }
}
