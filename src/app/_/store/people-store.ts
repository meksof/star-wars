import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { PeopleState } from "./people.state";
import { People } from "../models/domain/people";

const InitialState: PeopleState = { selectedPeople: undefined };

export const PeopleStore = signalStore(
    { providedIn: 'root' },
    withState<PeopleState>(InitialState),
    withMethods((store) => ({
        setPeople (people: People)
        {
            patchState(store, { selectedPeople: people })
        }
    }))
)