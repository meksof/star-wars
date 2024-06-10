import { createAction, props } from "@ngrx/store";
import { People } from "../models/domain/people";

export const SelectPeople = createAction(
    '[Root] Select People',
    props<{ people: People }>()
)