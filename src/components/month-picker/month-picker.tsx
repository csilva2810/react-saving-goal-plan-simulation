import * as React from 'react';
import { ReactSVG } from 'react-svg';
import subMonths from 'date-fns/subMonths';
import addMonths from 'date-fns/addMonths';
import differenceInMonths from 'date-fns/differenceInMonths';

import Box from '../box';
import Text from '../text';
import chevronLeft from '../../icons/chevron-left.svg';
import chevronRight from '../../icons/chevron-right.svg';
import * as Styled from './styles';

const isFutureDate = (date: Date) => {
  return differenceInMonths(date, new Date()) > 0;
};

type Props = {
  label?: string;
  date: Date;
  onChange: (date: Date) => void;
};

function MonthPicker(props: Props) {
  const { label, date, onChange } = props;

  const goToPreviousMonth = React.useCallback(() => {
    if (!isFutureDate(date)) return;
    const previousMonth = subMonths(date, 1);
    onChange(previousMonth);
  }, [date, onChange]);

  const goToNextMonth = React.useCallback(() => {
    onChange(addMonths(date, 1));
  }, [date, onChange]);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.defaultPrevented) {
        return;
      }

      switch (e.key) {
        case 'Left':
        case 'ArrowLeft':
          goToPreviousMonth();

          break;
        case 'Right':
        case 'ArrowRight':
          goToNextMonth();

          break;
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [goToPreviousMonth, goToNextMonth]);

  return (
    <div>
      {label && (
        <Box mb="4px">
          <Text variant="label">{label}</Text>
        </Box>
      )}
      <Styled.Container>
        <Styled.Icon onClick={goToPreviousMonth} aria-label="previous month">
          <ReactSVG src={chevronLeft} />
        </Styled.Icon>
        <Styled.Date>
          <Text textAlign="center" variant="paragraph" lineHeight={2}>
            <Text fontWeight={2}>
              {date.toLocaleString('default', { month: 'long' })}
            </Text>
            <Text color="blueGray400">{date.getFullYear()}</Text>
          </Text>
        </Styled.Date>
        <Styled.Icon onClick={goToNextMonth} aria-label="next month">
          <ReactSVG src={chevronRight} />
        </Styled.Icon>
      </Styled.Container>
    </div>
  );
}

export default MonthPicker;
