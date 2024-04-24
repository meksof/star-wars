import { HttpClient } from "@angular/common/http";
import { inject } from '@angular/core';
import { Observable } from "rxjs";
import { SwapiResponse } from "./swapi-result";

export class BaseService
{
    private baseUrl = 'https://swapi.dev/api';
    private httpClient = inject(HttpClient);

    constructor (
        protected endpoint: string
    )
    {}

    get<T> (extraUrl: string): Observable<SwapiResponse<T>>
    {
        return this.httpClient.get<SwapiResponse<T>>(`${this.baseUrl}/${this.endpoint}/${extraUrl}`);
    }
}