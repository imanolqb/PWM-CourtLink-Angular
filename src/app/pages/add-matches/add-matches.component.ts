import {Component, OnInit} from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-add-matches',
  templateUrl: 'add-matches.component.html',
  styleUrls: ['add-matches.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class AddMatchesComponent implements OnInit {
  fechaActual: string = '';

  constructor(private title: Title, private meta: Meta, private router: Router) {
    this.title.setTitle('CourtLink Basketball: Añadir partido');
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'CourtLink Basketball',
      },
    ]);

    // Establecer la fecha actual al inicio
    this.setMinDate();
  }

  ngOnInit(): void {}

  setMinDate(): void {
    const now = new Date();
    const year = now.getFullYear();
    const month = this.padNumber(now.getMonth() + 1);
    const day = this.padNumber(now.getDate());
    const hours = this.padNumber(now.getHours());
    const minutes = this.padNumber(now.getMinutes());
    this.fechaActual = `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  padNumber(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  volver() {
    this.router.navigate(['/partidos']).then();
  }
}
