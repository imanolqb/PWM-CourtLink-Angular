import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent} from "./views/login/login.component";
import {SignUpComponent} from "./views/sign-up/sign-up.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    SignUpComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CourtLink';
}
