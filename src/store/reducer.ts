import { savingsReducer } from './savings';
import { BaseAction, Store } from './types';

export function rootReducer(state: Store, action: BaseAction) {
  return {
    ...state,
    savings: savingsReducer(state.savings, action),
  };
}
