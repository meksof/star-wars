import { inject } from "@angular/core";
import { patchState, signalStore, withHooks, withMethods, withState } from "@ngrx/signals";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { catchError, debounceTime, distinctUntilChanged, filter, finalize, of, pipe, switchMap, tap } from "rxjs";

import { PeopleService } from "../_/services/peoples.service";
import { People } from "../_/models/domain/people";
import { PeopleState } from "./people.state";
import { isDefined, isNotNull } from "../_/shared/utils";

const InitialState: PeopleState = {
    peoples: [],
    searchTerm: undefined,
    isLoading: false
};

export const PeopleStore = signalStore(
    withState<PeopleState>(InitialState),
    withMethods((store, peopleService = inject(PeopleService)) => ({
        setSearchTerm (term: string)
        {
            patchState(store, { searchTerm: term })
        },
        setPeoples (peoples: People[])
        {
            patchState(store, { peoples })
        },
        searchPeoples: rxMethod<string | undefined>(
            pipe(
                filter(isDefined),
                filter(isNotNull),
                debounceTime(900),
                distinctUntilChanged<string>(),
                tap(() => patchState(store, { isLoading: true })),
                switchMap(term => peopleService.search(term)
                    .pipe(
                        tap((peoples) => patchState(store, { peoples })),
                        catchError(() =>
                        {
                            patchState(store, { peoples: [] });
                            return of();
                        }),
                        finalize(() => patchState(store, { isLoading: false }))
                    )
                )
            )
        )
    })),
    withHooks({
        onInit ({ searchPeoples, searchTerm })
        {
            searchPeoples(searchTerm);
        }
    })
)