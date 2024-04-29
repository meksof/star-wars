import { extractId } from "../../shared/utils";
import { VehicleApi } from "../api/vehicle-api";
import { FilmUI } from "./film";

export class Vehicle
{
    cargo_capacity!: string;
    consumables!: string;
    cost_in_credits!: string;
    created!: Date;
    crew!: string;
    edited!: Date;
    length!: string;
    manufacturer!: string;
    max_atmosphering_speed!: string;
    model!: string;
    name!: string;
    passengers!: string;
    pilots!: string[];
    films!: string[];
    url!: string;
    vehicle_class!: string;
    id?: string;
    filmsUI?: FilmUI[];
}

export function mapVehicleFromApi (source: VehicleApi, id: string): Vehicle
{
    const target = Object.assign(new Vehicle(), source);

    target.id = id;
    target.filmsUI = source.films.map(film => new FilmUI(film));

    return target;
}

export class VehicleUI
{
    public id: string;

    constructor (
        public url: string
    )
    {
        this.id = extractId(url);
    }
}