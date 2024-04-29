import { Component } from '@angular/core';
import { People } from '../_/models/domain/people';
import { PeopleComponent } from './people/people.component';
import { SearchComponent } from './search/search.component';
import { Path } from '../_/models/path';
import { BreadcrumbComponent } from '../_/layout/breadcrumb/breadcrumb.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    imports: [
        SearchComponent,
        PeopleComponent,
        BreadcrumbComponent
    ],
})
export class HomeComponent
{
    public people: People | undefined = undefined;
    public static path = new Path('Recherche de personnages', '');
    public paths = [HomeComponent.path]

    selected (people: People): void
    {
        this.people = people;
    }
}
