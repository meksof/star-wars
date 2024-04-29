import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { People } from '../../_/models/domain/people';
import { SwYearPipe } from '../../_/pipes/sw-year.pipe';
import { MaybeUnknownPipe } from '../../_/pipes/maybe-unknown.pipe';
import { EmptyBlockComponent } from '../../_/layout/empty-block/empty-block.component';

@Component({
    selector: 'sw-people',
    standalone: true,
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.scss'],
    imports: [
        SwYearPipe,
        MaybeUnknownPipe,
        EmptyBlockComponent,
        RouterLink
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleComponent
{
    @Input() people!: People | undefined;
}
