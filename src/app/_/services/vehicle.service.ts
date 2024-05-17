import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { BaseService } from './base.service';
import { Vehicle, mapVehicleFromApi } from '../models/domain/vehicle';
import { VehicleApi } from '../models/api/vehicle-api';

@Injectable({
    providedIn: 'root'
})
export class VehicleService extends BaseService
{
    constructor (
    )
    {
        super('vehicles');
    }

    getOne (id: string): Observable<Vehicle>
    {
        return this.get<VehicleApi>(`${this.baseUrl}/${id}`)
            .pipe(
                map(vehicleApi => mapVehicleFromApi(vehicleApi, id))
            );
    }

}
