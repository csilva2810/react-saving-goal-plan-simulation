import * as React from 'react';
import { ReactSVG } from 'react-svg';

import moneyIcon from '../../icons/money.svg';
import { formatMoney } from '../../services/money';
import Input, { Props } from '../input';

const MoneyInput = (props: Props) => {
  const getValue = () => {
    if (!props.value) return '';

    return formatMoney(String(props.value).trim(), { unit: '' });
  };

  return (
    <Input {...props} icon={<ReactSVG src={moneyIcon} />} value={getValue()} />
  );
};

export default MoneyInput;
