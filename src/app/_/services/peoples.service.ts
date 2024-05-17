import { Injectable } from '@angular/core';
import { Observable, concatAll, map, toArray } from 'rxjs';

import { BaseService } from './base.service';
import { People, mapPeopleFromApi } from '../models/domain/people';
import { PeopleApi } from '../models/api/people-api';

@Injectable({
    providedIn: 'root'
})
export class PeopleService extends BaseService
{
    constructor ()
    {
        super('people');
    }

    search (term: string): Observable<People[]>
    {
        return this.getSwapi<PeopleApi>(`?search=${term}`)
            .pipe(
                map((response) => response.results),
                concatAll(),
                map(mapPeopleFromApi),
                toArray()
            );
    }

}
