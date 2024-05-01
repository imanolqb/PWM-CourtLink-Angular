import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [
    NgOptimizedImage, RouterLink
  ],
  templateUrl: './personal_info.component.html',
  styleUrl: './personal_info.component.css'
})
export class Personal_infoComponent {

  constructor(private router: Router) {
  }
}
