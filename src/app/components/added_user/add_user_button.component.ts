import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-added-user',
  standalone: true,
  imports: [
    NgOptimizedImage, RouterLink
  ],
  templateUrl: './add_user_button.component.html',
  styleUrl: './add_user_button.component.css'
})
export class Add_user_buttonComponent {

  constructor(private router: Router) {
  }

  irAPaginaDeAnadirPartido() {
    this.router.navigate(['/add_match']);
  }
}
