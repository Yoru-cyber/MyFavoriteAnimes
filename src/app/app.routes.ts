import { Routes } from '@angular/router';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'Animes', component: AnimeListComponent},
    {path: 'home', component: HomeComponent},
    {path: 'About', component: AboutComponent}
];
