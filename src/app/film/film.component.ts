import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable, map, switchMap } from 'rxjs';

import { DetailsViewComponent } from '../_/layout/details-view/details-view.component';
import { Path } from '../_/shared/path';
import { EmptyBlockComponent } from '../_/layout/empty-block/empty-block.component';
import { FilmService } from '../services/film.service';
import { Film } from '../models/domain/film';
import { HomeComponent } from '../home/home.component';

@Component({
    selector: 'sw-film',
    standalone: true,
    imports: [
        DetailsViewComponent,
        EmptyBlockComponent,
        AsyncPipe
    ],
    templateUrl: './film.component.html'
})
export class FilmComponent implements OnInit
{
    public film!: Observable<Film>;
    private static path = new Path('Film', 'film/:id');
    public breadcrumbPaths = [HomeComponent.path, FilmComponent.path];

    constructor (
        private activatedRoute: ActivatedRoute,
        private filmService: FilmService
    )
    { }

    ngOnInit ()
    {
        this.film = this.activatedRoute.paramMap.pipe(
            map(params => params.get('id') ?? ''),
            switchMap(id =>
                this.filmService.getOne(id)
            )
        )
    }

}
