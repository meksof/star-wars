import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

import { People } from '../../_/models/domain/people';
import { SwYearPipe } from '../../_/pipes/sw-year.pipe';
import { MaybeUnknownPipe } from '../../_/pipes/maybe-unknown.pipe';
import { EmptyBlockComponent } from '../../_/layout/empty-block/empty-block.component';
import { AppState, getSelectedPeople } from '../../_/store/root-store';

@Component({
    selector: 'sw-people',
    standalone: true,
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.scss'],
    imports: [
        SwYearPipe,
        AsyncPipe,
        MaybeUnknownPipe,
        EmptyBlockComponent,
        RouterLink
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleComponent implements OnInit
{
    people!: Observable<People | undefined>;
    private store: Store<AppState> = inject(Store);


    ngOnInit ()
    {
        this.people = this.store.select(getSelectedPeople)
    }


}
