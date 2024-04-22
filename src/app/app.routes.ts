import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CourtsComponent } from './pages/courts/courts.component';
import { MatchesComponent } from './pages/matches/matches.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MvpsComponent } from './pages/mvps/mvps.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import {NgModule} from "@angular/core";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'canchas', component: CourtsComponent },
  { path: 'partidos', component: MatchesComponent },
  { path: 'mvps', component: MvpsComponent },
  { path: 'nosotros', component: NosotrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
