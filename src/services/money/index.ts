import { toMoney } from 'vanilla-masker';

type Options = {
  precision: number;
  separator: string;
  delimiter: string;
  unit: string;
  suffixUnit: string;
};

const defaultFormatOptions: Options = {
  precision: 0,
  separator: '.',
  delimiter: ',',
  unit: '$',
  suffixUnit: '',
};

export const formatMoney = (
  value: string | number,
  options: Partial<Options> = {}
) => {
  return toMoney(value, { ...defaultFormatOptions, ...options });
};

export const calculateMonthlyAmount = (
  totalAmount: number,
  totalMonths: number
) => {
  if (totalMonths === 0) return 0;
  return Math.ceil(totalAmount / totalMonths);
};
