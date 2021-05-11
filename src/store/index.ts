import { getItem, setItem } from "../services/storage";

export type Saving = {
  name: string;
  icon: string;
  id: number;
  totalAmount?: number;
  goalDate?: Date;
}

export type Savings = Saving[];

export type Store = {
  savings: Savings;
}

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
    }
  ],
}
export function getState() {
  const storedData = getItem<Store>(STORE_KEY);

  if (!storedData) return defaultState;

  return {
    savings: defaultState.savings.map(saving => {
      const item = storedData.savings.find(s => s.id === saving.id);
      if (item) return item;
      return saving;
    }),
  }
}

export function saveState(state: Store) {
  setItem(STORE_KEY, state);
}
