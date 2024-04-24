import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { PeopleComponent } from './people/people.component';
import { People } from './models/domain/people';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        SearchComponent,
        PeopleComponent
    ],
    templateUrl: './app.component.html'
})
export class AppComponent
{
    public people: People | undefined = undefined;

    selected (people: People): void
    {
        this.people = people;
    }
}
