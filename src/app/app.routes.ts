import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: HomeComponent.path.url, component: HomeComponent,
    },
    {
        path: 'people/:id', loadComponent: () => import('./people/people.component').then(mod => mod.PeopleComponent)
    },
    {
        path: 'film/:id', loadComponent: () => import('./film/film.component').then(mod => mod.FilmComponent)
    },
    {
        path: 'species/:id', loadComponent: () => import('./species/species.component').then(mod => mod.SpeciesComponent)
    },
    {
        path: 'vehicle/:id', loadComponent: () => import('./vehicle/vehicle.component').then(mod => mod.VehicleComponent)
    }
];
