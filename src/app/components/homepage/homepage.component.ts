import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  currentDate: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.setCurrentDate();
  }

  setCurrentDate() {
    // Obtener la fecha actual en formato adecuado para datetime-local
    this.currentDate = new Date().toISOString().slice(0, 16);
  }

  onSubmit() {
    this.router.navigate(['/matches']);
  }
}
