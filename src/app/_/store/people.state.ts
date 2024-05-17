import { People } from "../models/domain/people";

export interface PeopleState {
    selectedPeople: People | undefined;
}