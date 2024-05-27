import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { People } from "../models/domain/people";

export interface GlobalState {
    selectedPeople: People | undefined;
}

const InitialState: GlobalState = {
    selectedPeople: undefined
}

export const GlobalStore = signalStore(
    { providedIn: 'root' },
    withState<GlobalState>(InitialState),
    withMethods((store) => ({
        selectPeople (people: People)
        {
            patchState(store, { selectedPeople: people })
        }
    }))
)