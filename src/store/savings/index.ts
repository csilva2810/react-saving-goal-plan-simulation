import { BaseAction, Saving, Store } from '../types';

interface UpdateSavingAction extends BaseAction {
  type: 'UPDATE_SAVING';
  payload: Required<Saving>;
}

export const updateSaving = (saving: Required<Saving>): UpdateSavingAction => ({
  type: 'UPDATE_SAVING',
  payload: saving,
});

export function savingsReducer(
  state: Store['savings'] = [],
  action: BaseAction | UpdateSavingAction
) {
  switch (action.type) {
    case 'UPDATE_SAVING': {
      const { id, goalDate, totalAmount } = action.payload;
      return state.map((saving: Saving) => {
        if (saving.id === id) {
          return {
            ...saving,
            goalDate,
            totalAmount,
          };
        }

        return saving;
      });
    }

    default:
      return state;
  }
}

export function mapSaving(saving: Saving) {
  return {
    ...saving,
    goalDate: saving.goalDate ? new Date(saving.goalDate) : undefined,
  };
}
