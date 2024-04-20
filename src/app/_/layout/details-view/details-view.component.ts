import { Component, Input } from '@angular/core';
import { Path } from '../../shared/path';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
    selector: 'sw-details-view',
    standalone: true,
    templateUrl: './details-view.component.html',
    imports: [
        BreadcrumbComponent
    ]
})
export class DetailsViewComponent
{
    @Input() paths: Path[] = [];
}
