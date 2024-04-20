import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { BaseService } from './base.service';
import { Film, mapFilmFromApi } from '../models/domain/film';
import { FilmApi } from '../models/api/film';

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
        return this.httpClient.get<FilmApi>(`${this.url}/${id}`)
            .pipe(
                map(filmApi => mapFilmFromApi(filmApi, id))
            );
    }

}
