import { Film } from "./film";
import { People } from "./domain/people";

export interface Planet {
    climate: string;
    created: Date;
    diameter: string;
    edited: Date;
    films: string[] | Film[];
    gravity: string;
    name: string;
    orbital_period: string;
    population: string;
    residents: string[] | People[];
    rotation_period: string;
    surface_water: string;
    terrain: string;
    url: string;
}