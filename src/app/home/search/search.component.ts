import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, Signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { NgSelectModule } from '@ng-select/ng-select';

import { People } from '../../_/models/domain/people';
import { PeopleStore } from '../people-store';
import { GlobalStore } from '../../_/store/global-store';

@Component({
    selector: 'sw-search',
    standalone: true,
    imports: [
        NgSelectModule,
        AsyncPipe,
        JsonPipe,
        FormsModule
    ],
    providers: [PeopleStore],
    templateUrl: './search.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit
{
    public peoples!: Signal<People[]>;
    public selectedPeople: People | undefined;
    public searchTerm: Subject<string> = new Subject();
    public isLoading!: Signal<boolean>;
    private peopleStore = inject(PeopleStore);
    private globalStore = inject(GlobalStore);

    ngOnInit ()
    {
        this.searchTerm.subscribe(term => this.peopleStore.setSearchTerm(term));
        this.selectedPeople = this.globalStore.selectedPeople();
        this.isLoading = this.peopleStore.isLoading;
        this.peoples = this.peopleStore.peoples;
    }

    trackByFn (people: People)
    {
        return people.url;
    }

    changed (people: People)
    {
        this.globalStore.selectPeople(people);
        this.peopleStore.setPeoples([])
    }
}
