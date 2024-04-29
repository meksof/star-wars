import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, Subject, catchError, concat, distinctUntilChanged, of, switchMap, tap } from 'rxjs';
import { NgSelectModule } from '@ng-select/ng-select';

import { People } from '../../_/models/domain/people';
import { PeopleService } from '../../_/services/peoples.service';

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
    public selectedPerson: People | undefined = undefined;
    public searchTerm: Subject<string> = new Subject();
    public loading!: boolean;
    @Output() selected = new EventEmitter<People>()

    constructor (
        private peopleService: PeopleService
    )
    { }

    ngOnInit ()
    {
        this.peoples = concat(
            of([]), // default items,
            this.searchTerm.pipe(
                distinctUntilChanged(),
                tap(() => this.loading = true),
                switchMap(term => this.peopleService.search(term).pipe(
                    catchError(() => of([])), // empty list on error
                    tap(() => this.loading = false)
                ))
            )
        )
    }

    trackByFn (people: People)
    {
        return people.url;
    }

    changed (people: People)
    {
        this.selected.emit(people)
    }
}
