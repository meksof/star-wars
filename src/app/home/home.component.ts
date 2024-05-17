import { ChangeDetectionStrategy, Component } from '@angular/core';
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
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent
{
    public static path = new Path('Recherche de personnages', '');
    public paths = [HomeComponent.path]
}
