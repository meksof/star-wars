import { Component } from '@angular/core';
import { People } from '../models/domain/people';
import { PeopleComponent } from './people/people.component';
import { SearchComponent } from './search/search.component';
import { Path } from '../_/shared/path';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    imports: [
        SearchComponent,
        PeopleComponent
    ],
})
export class HomeComponent
{
    public people: People | undefined = undefined;
    public static path = new Path('Accueil', '');

    selected (people: People): void
    {
        this.people = people;
    }
}
