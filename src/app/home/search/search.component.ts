import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, Subject, catchError, concat, debounceTime, distinctUntilChanged, of, switchMap, tap } from 'rxjs';
import { NgSelectModule } from '@ng-select/ng-select';

import { People } from '../../_/models/domain/people';
import { PeopleService } from '../../_/services/peoples.service';
import { PeopleStore } from '../../_/store/people-store';

@Component({
    selector: 'sw-search',
    standalone: true,
    imports: [
        NgSelectModule,
        AsyncPipe,
        JsonPipe,
        FormsModule
    ],
    templateUrl: './search.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit
{
    public peoples!: Observable<People[]>;
    public selectedPeople: People | undefined;
    public searchTerm: Subject<string> = new Subject();
    public loading!: boolean;
    private peopleStore = inject(PeopleStore)

    constructor (
        private peopleService: PeopleService
    )
    {}

    ngOnInit ()
    {
        this.peoples = concat(
            of([]), // default items,
            this.searchTerm.pipe(
                debounceTime(900),
                distinctUntilChanged(),
                tap(() => this.loading = true),
                switchMap(term => this.peopleService.search(term).pipe(
                    catchError(() => of([])), // empty list on error
                    tap(() => this.loading = false)
                ))
            )
        )

        this.selectedPeople = this.peopleStore.selectedPeople()
    }

    trackByFn (people: People)
    {
        return people.url;
    }

    changed (people: People)
    {
        this.peopleStore.setPeople(people);
    }
}
