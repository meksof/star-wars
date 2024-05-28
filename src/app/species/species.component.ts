import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable, finalize, map, switchMap, tap } from 'rxjs';

import { DetailsViewComponent } from '../_/layout/details-view/details-view.component';
import { Path } from '../_/models/path';
import { EmptyBlockComponent } from '../_/layout/empty-block/empty-block.component';
import { SpeciesService } from '../_/services/species.service';
import { Species } from '../_/models/domain/species';
import { HomeComponent } from '../home/home.component';
import { MaybeUnknownPipe } from '../_/pipes/maybe-unknown.pipe';
import { BreadcrumbComponent } from '../_/layout/breadcrumb/breadcrumb.component';

@Component({
    selector: 'sw-species',
    standalone: true,
    imports: [
        DetailsViewComponent,
        EmptyBlockComponent,
        BreadcrumbComponent,
        AsyncPipe,
        MaybeUnknownPipe,
        RouterLink
    ],
    templateUrl: './species.component.html'
})
export class SpeciesComponent implements OnInit
{
    public species!: Observable<Species>;
    public loading = true;
    public breadcrumbPaths = [HomeComponent.path, SpeciesComponent.path];
    private static path = new Path('Species', 'species/:id');

    constructor (
        private activatedRoute: ActivatedRoute,
        private speciesService: SpeciesService
    )
    { }

    ngOnInit ()
    {
        this.species = this.activatedRoute.paramMap.pipe(
            tap(() =>
            {
                this.loading = true;
            }),
            map(params => params.get('id') ?? ''),
            switchMap(id =>
                this.speciesService.get(id)
            ),
            finalize(() =>
            {
                this.loading = false;
            })
        )
    }

}
