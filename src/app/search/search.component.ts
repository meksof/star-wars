import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, Subject, catchError, concat, distinctUntilChanged, of, switchMap, tap } from 'rxjs';
import { NgSelectModule } from '@ng-select/ng-select';

import { People } from '../models/domain/people';
import { PeoplesService } from '../services/peoples.service';

@Component({
    selector: 'app-search',
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
    public selectedPerson: People = {} as People;
    public searchTerm: Subject<string> = new Subject();
    public peopleLoading!: boolean;
    @Output() selected = new EventEmitter<People>()

    constructor (
        private peoplesService: PeoplesService
    )
    { }

    ngOnInit ()
    {
        this.peoples = concat(
            of([]), // default items,
            this.searchTerm.pipe(
                distinctUntilChanged(),
                tap(() => this.peopleLoading = true),
                switchMap(term => this.peoplesService.search(term).pipe(
                    catchError(() => of([])), // empty list on error
                    tap(() => this.peopleLoading = false)
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
