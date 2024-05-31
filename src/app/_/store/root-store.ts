import { createReducer, createSelector, on } from "@ngrx/store";
import { People } from "../models/domain/people";
import { SelectPeople } from "./root.actions";

export const RootFeatureKey = 'root';

export interface AppState {
    [RootFeatureKey]: RootState;
}

export interface RootState {
    selectedPeople: People | undefined;
}

const InitialState: RootState = {
    selectedPeople: undefined
}


export const rootReducer = createReducer(
    InitialState,
    on(SelectPeople, (state, { people }) => ({
        ...state,
        selectedPeople: people
    }))
);

const rootState = (state: AppState): RootState => state.root;

export const getSelectedPeople = createSelector(
    rootState,
    (state) => state.selectedPeople
);