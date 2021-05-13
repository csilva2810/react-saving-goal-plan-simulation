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

export interface BaseAction {
  type: any;
  payload?: any;
}
export type StoreContextType = {
  state: Store;
  dispatch: (action: BaseAction) => void;
};
