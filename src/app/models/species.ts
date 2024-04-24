import { Film } from "./film";
import { People } from "./domain/people";
import { Planet } from "./planet";

export interface Species {
    average_height: string;
    average_lifespan: string;
    classification: string;
    created: Date;
    designation: string;
    edited: Date;
    eye_colors: string;
    hair_colors: string;
    homeworld: string | Planet;
    language: string;
    name: string;
    people: string[] | People[];
    films: string[] | Film[];
    skin_colors: string;
    url: string;
}