import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { People } from '../../models/domain/people';
import { SwYearPipe } from '../../pipes/sw-year.pipe';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'sw-people',
    standalone: true,
    templateUrl: './people.component.html',
    imports: [
        SwYearPipe,
        RouterLink
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleComponent
{
    @Input() people!: People;
}
