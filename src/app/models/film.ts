import { People } from "./domain/people";
import { Planet } from "./planet";
import { Species } from "./species";
import { Starship } from "./starship";
import { Vehicle } from "./vehicule";

export interface Film {
    characters: string[] | People[];
    created: Date;
    director: string;
    edited: Date;
    episode_id: string;
    opening_crawl: string;
    planets: string[] | Planet[];
    producer: string;
    release_date: Date;
    species: string[] | Species[];
    starships: string[] | Starship[];
    title: string;
    url: string;
    vehicles: string[] | Vehicle[];
}
