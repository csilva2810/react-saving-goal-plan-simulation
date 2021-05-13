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

export type StoreContextType = {
  state: Store;
  actions: Record<string, Function>;
};
