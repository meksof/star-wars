import { extractId } from "../../shared/utils";
import { SpeciesApi } from "../api/species-api";
import { FilmUI } from "./film";

export class Species
{
    average_height!: string;
    average_lifespan!: string;
    classification!: string;
    created!: Date;
    designation!: string;
    edited!: Date;
    eye_colors!: string;
    hair_colors!: string;
    homeworld!: string;
    language!: string;
    name!: string;
    people!: string[];
    films!: string[];
    skin_colors!: string;
    url!: string;
    id?: string;
    filmsUI?: FilmUI[];
}

export function mapSpeciesFromApi (source: SpeciesApi, id: string): Species
{
    const target = Object.assign(new Species(), source);

    target.id = id;
    target.filmsUI = source.films.map(film => new FilmUI(film));

    return target;
}

export class SpeciesUI
{
    public id: string;

    constructor (
        public url: string
    )
    {
        this.id = extractId(url);
    }
}