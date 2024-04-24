import { Film } from "./film";
import { People } from "./domain/people";

export interface Starship {
    MGLT: string;
    cargo_capacity: string;
    consumables: string;
    cost_in_credits: string;
    created: Date;
    crew: string;
    edited: Date;
    hyperdrive_rating: string;
    length: string;
    manufacturer: string;
    max_atmosphering_speed: string;
    model: string;
    name: string;
    passengers: string;
    films: string[] | Film[];
    pilots: string[] | People[];
    starship_class: string;
    url: string;
}