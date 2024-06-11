import { createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  changeCommissionValue,
  resetCommissionValue,
} from './counter.actions';

export const initialState = 0;
export const commissionInitialValue = 10;

export const countReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

export const commissionValueReduces = createReducer(
  commissionInitialValue,
  on(changeCommissionValue, (state) => state),
  on(resetCommissionValue, (state) => commissionInitialValue)
);
