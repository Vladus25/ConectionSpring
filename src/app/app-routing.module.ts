import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtentiComponent } from './components/utenti/utenti.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AutoComponent } from './components/auto/auto.component';
import { AutoUtenteComponent } from './components/auto-utente/auto-utente.component';

const routes: Routes = [
  {path: 'TuttiUtenti', component: UtentiComponent},
  {path: 'TuttiAuto', component: AutoComponent},
  {path: 'AutoUtente/:id', component: AutoUtenteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
