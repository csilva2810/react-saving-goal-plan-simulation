import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

import { StoreContextType } from './index';
import { rootReducer } from './reducer';
import { getState, saveState } from './state';

export const StoreContext = createContext<StoreContextType>({
  state: getState(),
  dispatch: () => {},
});
StoreContext.displayName = 'StoreContext';

type Props = {
  children: React.ReactNode;
};
export const StoreProvider = (props: Props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(rootReducer, getState());
  const store = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );

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
