import { getItem, setItem } from '../services/storage';
import { mapSaving } from './savings';
import { Store } from './types';

const STORE_KEY = 'APP_STORE';
export const defaultState: Store = {
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

export function getState(): Store {
  const persistedStore = getItem<Store>(STORE_KEY);
  if (!persistedStore) return defaultState;

  const savings = persistedStore.savings.map(mapSaving);

  return {
    savings,
  };
}

export function saveState(state: Store) {
  setItem(STORE_KEY, state);
}
