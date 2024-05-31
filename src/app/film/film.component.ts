import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable, filter, finalize, map, switchMap, tap } from 'rxjs';

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
        // TODO: refactor this to use a store instead
        this.film = this.activatedRoute.paramMap.pipe(
            tap(() =>
            {
                this.loading = true;
            }),
            map((params: ParamMap) => params.get('id')),
            filter((id: string | null): id is string => id !== null),
            switchMap(id =>
                this.filmService.get(id)
            ),
            finalize(() =>
            {
                this.loading = false;
            })
        )
    }

}
