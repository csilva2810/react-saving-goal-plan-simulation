import { getItem, setItem } from '../services/storage';
import { IconName } from '../types/icon';

export type Saving = {
  readonly name: string;
  readonly icon: IconName;
  readonly id: number;
  totalAmount?: number;
  goalDate?: Date;
};

export type Savings = Saving[];

export type Store = {
  savings: Savings;
};

const STORE_KEY = 'APP_STORE';
const defaultState: Store = {
  savings: [
    {
      id: 1,
      name: 'Go to college',
      icon: 'go-to-college',
    },
    {
      id: 2,
      name: 'Take a vacation',
      icon: 'take-a-vacation',
    },
    {
      id: 3,
      name: 'Buy a car',
      icon: 'buy-a-car',
    },
    {
      id: 4,
      name: 'Throw a wedding party',
      icon: 'throw-a-wedding-party',
    },
    {
      id: 5,
      name: 'Build an emergency fund',
      icon: 'build-an-emergency-fund',
    },
    {
      id: 6,
      name: 'Have a baby',
      icon: 'have-a-baby',
    },
    {
      id: 7,
      name: 'Buy a house',
      icon: 'buy-a-house',
    },
  ],
};
export function getState() {
  const storedData = getItem<Store>(STORE_KEY);
  if (!storedData) return defaultState;

  const savings = storedData.savings.map((saving) => ({
    ...saving,
    goalDate: saving.goalDate ? new Date(saving.goalDate) : undefined,
  }));

  return {
    savings,
  };
}

export function saveState(state: Store) {
  setItem(STORE_KEY, state);
}

export function getSavingById(id: number): Saving | undefined {
  const savings = getState().savings;

  return savings.find((saving: Saving) => saving.id === id);
}

export class UpdateSavingError extends Error {
  constructor(message: string) {
    super(message);

    this.message = message;
  }
}
export function updateSaving({ id, totalAmount, goalDate }: Required<Saving>) {
  const saving = getSavingById(id);

  if (!saving) throw new UpdateSavingError('Saving not found');

  const state = getState();
  const newSavings = state.savings.map((s: Saving) => {
    if (s.id === id) {
      return {
        ...saving,
        goalDate,
        totalAmount,
      };
    }

    return s;
  });

  const newState = {
    ...state,
    savings: newSavings,
  };

  saveState(newState);
}
