import { inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { SwapiResponse } from "./swapi-response";

export class BaseService
{
    protected httpClient = inject(HttpClient);
    protected baseUrl: string;
    private apiUrl = 'https://swapi.dev/api';

    constructor (
        protected endpoint: string
    )
    {
        this.baseUrl = `${this.apiUrl}/${endpoint}`;
    }

    protected getSwapi<T> (extraUrl: string): Observable<SwapiResponse<T>>
    {
        return this.httpClient.get<SwapiResponse<T>>(`${this.baseUrl}/${extraUrl}`);
    }

    protected _get<T> (url: string): Observable<T>
    {
        return this.httpClient.get<T>(`${url}`);
    }
}