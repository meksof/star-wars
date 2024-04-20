import { extractId } from "../../_/shared/utils";
import { FilmApi } from "../api/film";

export class Film
{
    characters!: string[];
    created!: Date;
    director!: string;
    edited!: Date;
    episode_id!: string;
    opening_crawl!: string;
    planets!: string[];
    producer!: string;
    release_date!: Date;
    species!: string[];
    starships!: string[];
    title!: string;
    url!: string;
    vehicles!: string[];
    id?: string;
}

export function mapFilmFromApi (source: FilmApi, id: string): Film
{
    const target = Object.assign(new Film(), source);

    target.id = id;

    return target;
}

export class filmUI
{
    public id: string;

    constructor (
        public url: string
    )
    {
        this.id = extractId(url);
    }
}
