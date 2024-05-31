import { ChangeDetectionStrategy, Component, OnInit, Signal, inject } from '@angular/core';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NgSelectModule } from '@ng-select/ng-select';
import { Subject, tap } from 'rxjs';

import { People } from '../../_/models/domain/people';
import { PeopleStore } from '../people-store';
import { AppState, getSelectedPeople } from '../../_/store/root-store';
import { SelectPeople } from '../../_/store/root.actions';

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
    private store: Store<AppState> = inject(Store);

    ngOnInit ()
    {
        this.searchTerm.subscribe(term => this.peopleStore.setSearchTerm(term));
        this.store.select(getSelectedPeople)
            .pipe(
                tap((people) =>
                {
                    this.selectedPeople = people;
                })
            ).subscribe();
        this.isLoading = this.peopleStore.isLoading;
        this.peoples = this.peopleStore.peoples;
    }

    trackByFn (people: People)
    {
        return people.url;
    }

    changed (people: People)
    {
        this.store.dispatch(SelectPeople({ people }));
        this.peopleStore.setPeoples([])
    }
}
