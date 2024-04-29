import { Component } from '@angular/core';

@Component({
    selector: 'sw-empty-block',
    standalone: true,
    styles: `
    .empty {
        height: calc(100vh - 108px - (56px * 2) - 60px);
    }
    `,
    templateUrl: './empty-block.component.html'
})
export class EmptyBlockComponent
{
}
