import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable, map, switchMap, tap, finalize } from 'rxjs';

import { DetailsViewComponent } from '../_/layout/details-view/details-view.component';
import { Path } from '../_/models/path';
import { EmptyBlockComponent } from '../_/layout/empty-block/empty-block.component';
import { VehicleService } from '../_/services/vehicle.service';
import { Vehicle } from '../_/models/domain/vehicle';
import { HomeComponent } from '../home/home.component';
import { MaybeUnknownPipe } from '../_/pipes/maybe-unknown.pipe';
import { BreadcrumbComponent } from '../_/layout/breadcrumb/breadcrumb.component';

@Component({
    selector: 'sw-vehicle',
    standalone: true,
    imports: [
        DetailsViewComponent,
        EmptyBlockComponent,
        BreadcrumbComponent,
        RouterLink,
        AsyncPipe,
        MaybeUnknownPipe
    ],
    templateUrl: './vehicle.component.html'
})
export class VehicleComponent implements OnInit
{
    public vehicle!: Observable<Vehicle>;
    public loading = true;
    public breadcrumbPaths = [HomeComponent.path, VehicleComponent.path];
    private static path = new Path('Véhicule', 'vehicle/:id');

    constructor (
        private activatedRoute: ActivatedRoute,
        private vehicleService: VehicleService
    )
    { }

    ngOnInit ()
    {
        this.vehicle = this.activatedRoute.paramMap.pipe(
            tap(() =>
            {
                this.loading = true;
            }),
            map(params => params.get('id') ?? ''),
            switchMap(id =>
                this.vehicleService.get(id)
            ),
            finalize(() =>
            {
                this.loading = false;
            })
        )
    }

}
