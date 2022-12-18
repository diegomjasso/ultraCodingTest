import { createAction, props } from "@ngrx/store";

export const updateBalance = createAction('[Balance Component] Add Balance', props<{newBalance: number}>());