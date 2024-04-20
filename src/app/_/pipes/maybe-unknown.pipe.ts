import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'MaybeUnknown',
    standalone: true
})
export class MaybeUnknownPipe implements PipeTransform
{

    transform (value: string, to: string = 'inconnue'): string
    {
        if (value === 'unknown')
        {
            return to;
        }

        return value;
    }

}
