import * as React from 'react';
import { ReactSVG } from 'react-svg';

import { IconName } from '../../types/icon';

const iconsMap: Record<string, string> = {
  'go-to-college': require('../../icons/go-to-college.svg').default,
  'take-a-vacation': require('../../icons/take-a-vacation.svg').default,
  'buy-a-car': require('../../icons/buy-a-car.svg').default,
  'throw-a-wedding-party': require('../../icons/throw-a-wedding-party.svg')
    .default,
  'build-an-emergency-fund': require('../../icons/build-an-emergency-fund.svg')
    .default,
  'have-a-baby': require('../../icons/have-a-baby.svg').default,
  'buy-a-house': require('../../icons/buy-house.svg').default,
};

type Props = {
  name: IconName;
  size?: string;
};

const Icon = (props: Props) => {
  const { name, size } = props;
  const icon = iconsMap[name];

  return (
    <ReactSVG
      src={icon}
      beforeInjection={(svg) => {
        svg.setAttribute('style', `width: ${size}; height: ${size};`);
      }}
    />
  );
};

Icon.defaultProps = {
  size: '40px',
};

export default Icon;
