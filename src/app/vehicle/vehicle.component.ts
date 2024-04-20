import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable, map, switchMap } from 'rxjs';

import { DetailsViewComponent } from '../_/layout/details-view/details-view.component';
import { Path } from '../_/models/path';
import { EmptyBlockComponent } from '../_/layout/empty-block/empty-block.component';
import { VehicleService } from '../_/services/vehicle.service';
import { Vehicle } from '../_/models/domain/vehicle';
import { HomeComponent } from '../home/home.component';

@Component({
    selector: 'sw-vehicle',
    standalone: true,
    imports: [
        DetailsViewComponent,
        EmptyBlockComponent,
        AsyncPipe
    ],
    templateUrl: './vehicle.component.html'
})
export class VehicleComponent implements OnInit
{
    public vehicle!: Observable<Vehicle>;
    private static path = new Path('Vehicle', 'vehicle/:id');
    public breadcrumbPaths = [HomeComponent.path, VehicleComponent.path];

    constructor (
        private activatedRoute: ActivatedRoute,
        private vehicleService: VehicleService
    )
    { }

    ngOnInit ()
    {
        this.vehicle = this.activatedRoute.paramMap.pipe(
            map(params => params.get('id') ?? ''),
            switchMap(id =>
                this.vehicleService.getOne(id)
            )
        )
    }

}
