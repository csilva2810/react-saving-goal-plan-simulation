import { createContext, useState, useContext, useEffect } from 'react';

import { getItem, setItem } from '../services/storage';

import { Saving, StoreContextType, Store, UpdateSavingError } from './index';

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

  const savings = persistedStore.savings.map((saving) => ({
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

export const StoreContext = createContext<StoreContextType>({
  state: defaultState,
  actions: {},
});
StoreContext.displayName = 'StoreContext';

type Props = {
  children: React.ReactNode;
};
export const StoreProvider = (props: Props) => {
  const { children } = props;
  const [state, setState] = useState(() => getState());

  const getSavingById = (id: number) =>
    state.savings.find((saving: Saving) => saving.id === id);

  const updateSaving = ({ id, totalAmount, goalDate }: Required<Saving>) => {
    const saving = getSavingById(id);

    if (!saving) throw new UpdateSavingError('Saving not found');

    setState((previous: Store) => {
      const newSavings = previous.savings.map((s: Saving) => {
        if (s.id === id) {
          return {
            ...saving,
            goalDate,
            totalAmount,
          };
        }

        return s;
      });

      return {
        ...previous,
        savings: newSavings,
      };
    });
  };

  const store = {
    state,
    actions: {
      getSavingById,
      updateSaving,
    },
  };

  useEffect(() => {
    saveState(state);
  }, [state]);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => {
  return useContext(StoreContext);
};
