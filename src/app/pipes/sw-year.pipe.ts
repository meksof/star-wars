import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'SWYear',
    standalone: true
})
export class SwYearPipe implements PipeTransform
{
    // BBY => Avant la Bataille de Yavin
    // ABY => Après la Bataille de Yavin
    transform (value: string): string
    {
        let year = 0;

        year = parseInt(value);

        if (value.includes('BBY'))
        {
            return `${year} Avant la Bataille de Yavin`;
        }
        else if ( value.includes('ABY') )
        {
            return `${year} Après la Bataille de Yavin`;
        }

        return "inconnue";
    }

}
