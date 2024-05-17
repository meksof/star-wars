import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Film, mapFilmFromApi } from '../models/domain/film';
import { FilmApi } from '../models/api/film-api';
import { BaseService } from './base.service';

@Injectable({
    providedIn: 'root'
})
export class FilmService extends BaseService
{
    constructor (
    )
    {
        super('films');
    }

    getOne (id: string): Observable<Film>
    {
        return this.get<FilmApi>(`${this.baseUrl}/${id}`)
            .pipe(
                map(filmApi => mapFilmFromApi(filmApi, id))
            );
    }

}
