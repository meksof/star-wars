import { PeopleApi } from "../api/people-api";
import { FilmUI } from "./film";
import { SpeciesUI } from "./species";
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
    films!: string[];
    gender!: string;
    hair_color!: string;
    height!: string;
    homeworld!: string;
    mass!: string;
    name!: string;
    skin_color!: string;
    created!: Date;
    edited!: Date;
    species!: string[] ;
    starships!: string[] ;
    url!: string;
    vehicles!: string[] ;
    filmsUI?: FilmUI[];
    speciesUI?: SpeciesUI[];
}

export const mapPeopleFromApi = (source: PeopleApi): People =>
{
    const target: People = Object.assign(new People(), source);

    target.filmsUI = source.films.map(film => new FilmUI(film))
    target.speciesUI = source.species.map(species => new SpeciesUI(species))

    return target
}