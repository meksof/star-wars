export class SwapiResponse<T>
{
    count?: number
    next?: string
    previous?: string
    results!: Array<T>
}