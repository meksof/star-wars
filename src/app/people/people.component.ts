import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, filter, finalize, map, switchMap, tap } from 'rxjs';

import { People } from '../_/models/domain/people';
import { HomeComponent } from '../home/home.component';
import { Path } from '../_/models/path';
import { PeopleService } from '../_/services/peoples.service';
import { DetailsViewComponent } from '../_/layout/details-view/details-view.component';
import { MaybeUnknownPipe } from '../_/pipes/maybe-unknown.pipe';
import { SwYearPipe } from '../_/pipes/sw-year.pipe';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-people',
    standalone: true,
    imports: [
        DetailsViewComponent,
        RouterLink,
        AsyncPipe,
        MaybeUnknownPipe,
        SwYearPipe
    ],
    templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit
{

    public people!: Observable<People>;
    public loading = true;
    public breadcrumbPaths = [HomeComponent.path, PeopleComponent.path];
    private static path = new Path('People', 'people/:id');

    constructor (
        private activatedRoute: ActivatedRoute,
        private peopleService: PeopleService
    )
    { }

    ngOnInit ()
    {
        // TODO: refactor this to use a store instead
        this.people = this.activatedRoute.paramMap.pipe(
            tap(() =>
            {
                this.loading = true;
            }),
            map(params => params.get('id')),
            filter((id: string | null): id is string => id!== null),
            switchMap(id =>
                this.peopleService.get(id)
            ),
            finalize(() =>
            {
                this.loading = false;
            })
        )
    }

}
