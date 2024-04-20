import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { People } from '../../_/models/domain/people';
import { SwYearPipe } from '../../_/pipes/sw-year.pipe';
import { MaybeUnknownPipe } from '../../_/pipes/maybe-unknown.pipe';

@Component({
    selector: 'sw-people',
    standalone: true,
    templateUrl: './people.component.html',
    imports: [
        SwYearPipe,
        MaybeUnknownPipe,
        RouterLink
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleComponent
{
    @Input() people!: People;
}
