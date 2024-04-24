import { PeopleApi } from "../api/people";
import { Film } from "../film";
import { Species } from "../species";
import { Starship } from "../starship";
import { Vehicle } from "../vehicule";
// Les élements suivants sont à afficher dans l'UI:
// Le nom,
// L'année de naissance,
// Le sexe,
// La taille,
// La masse,
// les films dans lesquels il est apparu,
// Les espèces,
// Les véhicules,
// les vaisseaux
export class People
{
    birth_year!: string;
    eye_color!: string;
    films!: string[] | Film[];
    gender!: string;
    hair_color!: string;
    height!: string;
    homeworld!: string;
    mass!: string;
    name!: string;
    skin_color!: string;
    created!: Date;
    edited!: Date;
    species!: string[] | Species[];
    starships!: string[] | Starship[];
    url!: string;
    vehicles!: string[] | Vehicle[];
}

export const mapPeopleFromApi = (source: PeopleApi): People =>
{
    const target: People = Object.assign(new People(), source);

    return target
}