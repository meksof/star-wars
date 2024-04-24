import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { People } from '../models/domain/people';
import { SwYearPipe } from '../pipes/sw-year.pipe';

@Component({
    selector: 'app-people',
    standalone: true,
    templateUrl: './people.component.html',
    imports: [
        SwYearPipe
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleComponent
{
    @Input() people!: People;
}
