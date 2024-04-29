import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Path } from '../../models/path';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
    selector: 'sw-details-view',
    standalone: true,
    templateUrl: './details-view.component.html',
    styleUrls: ['./details-view.component.scss'],
    imports: [
        BreadcrumbComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsViewComponent
{
    @Input() paths: Path[] = [];
}
