import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable, map, switchMap } from 'rxjs';

import { DetailsViewComponent } from '../_/layout/details-view/details-view.component';
import { Path } from '../_/models/path';
import { EmptyBlockComponent } from '../_/layout/empty-block/empty-block.component';
import { SpeciesService } from '../_/services/species.service';
import { Species } from '../_/models/domain/species';
import { HomeComponent } from '../home/home.component';

@Component({
    selector: 'sw-species',
    standalone: true,
    imports: [
        DetailsViewComponent,
        EmptyBlockComponent,
        AsyncPipe
    ],
    templateUrl: './species.component.html'
})
export class SpeciesComponent implements OnInit
{
    public species!: Observable<Species>;
    private static path = new Path('Species', 'species/:id');
    public breadcrumbPaths = [HomeComponent.path, SpeciesComponent.path];

    constructor (
        private activatedRoute: ActivatedRoute,
        private speciesService: SpeciesService
    )
    { }

    ngOnInit ()
    {
        this.species = this.activatedRoute.paramMap.pipe(
            map(params => params.get('id') ?? ''),
            switchMap(id =>
                this.speciesService.getOne(id)
            )
        )
    }

}
