import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { InscrireComponent } from './Components/inscrire/inscrire.component';
import { MovieListComponent } from './Components/movie-list/movie-list.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: InscrireComponent },
  { path: 'movie-list', component: MovieListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' } // Redirect any other route to home

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule {}