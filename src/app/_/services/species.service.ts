import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { BaseService } from './base.service';
import { Species, mapSpeciesFromApi } from '../models/domain/species';
import { SpeciesApi } from '../models/api/species-api';

@Injectable({
    providedIn: 'root'
})
export class SpeciesService extends BaseService
{
    constructor (
    )
    {
        super('species');
    }

    get (id: string): Observable<Species>
    {
        return this._get<SpeciesApi>(`${this.baseUrl}/${id}`)
            .pipe(
                map(speciesApi => mapSpeciesFromApi(speciesApi, id))
            );
    }

}
