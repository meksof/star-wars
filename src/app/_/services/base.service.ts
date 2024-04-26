import { HttpClient } from "@angular/common/http";
import { inject } from '@angular/core';
import { Observable } from "rxjs";
import { SwapiResponse } from "./swapi-result";

export class BaseService
{
    private baseUrl = 'https://swapi.dev/api';
    protected httpClient = inject(HttpClient);
    protected url: string;

    constructor (
        protected endpoint: string
    )
    {
        this.url = `${this.baseUrl}/${endpoint}`;
    }

    protected get<T> (extraUrl: string): Observable<SwapiResponse<T>>
    {
        return this.httpClient.get<SwapiResponse<T>>(`${this.url}/${extraUrl}`);
    }
}