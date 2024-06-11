import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter component] Increment');
export const decrement = createAction('[Counter component] Decrement');
export const reset = createAction('[Counter component] Reset]');

export const changeCommissionValue = createAction(
  '[Commission component] ChangeCommissionValue'
);
export const resetCommissionValue = createAction(
  '[Commission component] ResetCommissionValue'
);
