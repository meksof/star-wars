import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Path } from '../../models/path';

@Component({
    selector: 'sw-breadcrumb',
    standalone: true,
    templateUrl: './breadcrumb.component.html',
    imports: [
        RouterLink
    ]
})
export class BreadcrumbComponent
{
    @Input() paths: Path[] = [];
}
