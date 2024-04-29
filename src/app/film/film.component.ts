import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable, finalize, map, switchMap, tap } from 'rxjs';

import { DetailsViewComponent } from '../_/layout/details-view/details-view.component';
import { Path } from '../_/models/path';
import { EmptyBlockComponent } from '../_/layout/empty-block/empty-block.component';
import { FilmService } from '../_/services/film.service';
import { Film } from '../_/models/domain/film';
import { HomeComponent } from '../home/home.component';
import { BreadcrumbComponent } from '../_/layout/breadcrumb/breadcrumb.component';

@Component({
    selector: 'sw-film',
    standalone: true,
    imports: [
        DetailsViewComponent,
        EmptyBlockComponent,
        BreadcrumbComponent,
        RouterLink,
        AsyncPipe
    ],
    templateUrl: './film.component.html'
})
export class FilmComponent implements OnInit
{
    public film!: Observable<Film>;
    public loading = true;
    public breadcrumbPaths = [HomeComponent.path, FilmComponent.path];
    private static path = new Path('Film', 'film/:id');

    constructor (
        private activatedRoute: ActivatedRoute,
        private filmService: FilmService
    )
    { }

    ngOnInit ()
    {
        this.film = this.activatedRoute.paramMap.pipe(
            tap(() =>
            {
                this.loading = true;
            }),
            map(params => params.get('id') ?? ''),
            switchMap(id =>
                this.filmService.getOne(id)
            ),
            finalize(() =>
            {
                this.loading = false;
            })
        )
    }

}
