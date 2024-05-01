import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-match-details',
  standalone: true,
  imports: [
    NgOptimizedImage, RouterLink
  ],
  templateUrl: './match_details.component.html',
  styleUrl: './match_details.component.css'
})
export class Match_detailsComponent {

  constructor(private router: Router) {
  }
}
