import { extractId } from "../../shared/utils";
import { FilmApi } from "../api/film-api";
import { SpeciesUI } from "./species";
import { VehicleUI } from "./vehicle";

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
    speciesUI?: SpeciesUI[];
    vehiclesUI?: VehicleUI[];
}

export function mapFilmFromApi (source: FilmApi, id: string): Film
{
    const target = Object.assign(new Film(), source);

    target.id = id;
    target.speciesUI = source.species.map(species => new SpeciesUI(species));
    target.vehiclesUI = source.vehicles.map(vehicle => new VehicleUI(vehicle));

    return target;
}

export class FilmUI
{
    public id: string;

    constructor (
        public url: string
    )
    {
        this.id = extractId(url);
    }
}
