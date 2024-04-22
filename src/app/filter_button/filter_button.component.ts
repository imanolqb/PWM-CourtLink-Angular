import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-filter-button',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './filter_button.component.html',
  styleUrl: './filter_button.component.css'
})
export class Filter_buttonComponent {

}
