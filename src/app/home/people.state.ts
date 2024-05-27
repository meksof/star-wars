import { People } from "../_/models/domain/people";

export interface PeopleState {
    peoples: People[];
    searchTerm: string | undefined;
    isLoading: boolean;
}