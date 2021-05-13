import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import Box from '../../components/box';
import Button from '../../components/button';
import Text from '../../components/text';
import MoneyInput from '../../components/money-input';
import MonthPicker from '../../components/month-picker';
import { Card, CardContent, OutlinedCard } from '../../components/card';

import { formatMoney, calculateMonthlyAmount } from '../../services/money';
import {
  getLongMonthName,
  calculateDiffInMonths,
  getNextMonth,
} from '../../services/date';

import * as Styled from './styles';
import Icon from '../../components/icon';
import { useStore } from '../../store';
import { updateSaving } from '../../store/savings';

const nonDigit = /\D/gi;
const removeSymbols = (value: string) => Number(value.replace(nonDigit, ''));

type Props = RouteComponentProps<{
  savingId: string;
}>;

const NewSavingPlan = (props: Props) => {
  const { history } = props;
  const { savingId } = props.match.params;

  const { state, dispatch } = useStore();
  const saving = state.savings.find((saving) => saving.id === Number(savingId));

  const initialDate = React.useRef(new Date());
  const [totalAmount, setTotalAmount] = React.useState(
    String(saving?.totalAmount ?? '')
  );
  const [goalDate, setGoalDate] = React.useState(
    saving?.goalDate ?? getNextMonth(initialDate.current)
  );

  const handleMonthChange = React.useCallback((date: Date) => {
    setGoalDate(date);
  }, []);
  const totalMonths = calculateDiffInMonths(goalDate, initialDate.current);
  const monthlyAmount = calculateMonthlyAmount(
    removeSymbols(totalAmount),
    totalMonths
  );

  if (!saving) return <>Saving plan not found</>;

  const handleConfirmClick = () => {
    try {
      dispatch(
        updateSaving({
          ...saving,
          totalAmount: removeSymbols(totalAmount),
          goalDate,
        })
      );

      history.push('/savings');
    } catch (e) {
      alert(`Error: ${e.message}`);
    }
  };

  return (
    <Styled.Root>
      <Box py={4} px={2}>
        <Text
          as="h2"
          variant="subtitle"
          textAlign="center"
          color="brandPrimary"
        >
          {`Let's plan your`} <strong>saving goal.</strong>
        </Text>
      </Box>

      <Box as={Card} width={[1, '560px']} m="0 auto">
        <CardContent>
          <Box display="flex" alignItems="center" mb={3}>
            <Box mr={2}>
              <Icon name={saving.icon} size="64px" />
            </Box>
            <div>
              <Box mb="4px">
                <Text as="h3" variant="headingSmall" fontWeight="bold">
                  {saving?.name}
                </Text>
              </Box>
              <Text as="h3" variant="paragraph" color="blueGray400">
                Saving goal
              </Text>
            </div>
          </Box>

          <form
            onSubmit={(e) => e.preventDefault()}
            aria-label="saving plan form"
          >
            <Box display="flex" alignItems="center" flexWrap="wrap" mb={[0, 3]}>
              <Box width={[1, 0.6]} mb={[2, 0]} pr={[0, 2]}>
                <MoneyInput
                  id="totalamount"
                  label="Total amount"
                  value={totalAmount}
                  onChange={(e) => setTotalAmount(e.target.value)}
                  onKeyDown={(e) => e.nativeEvent.stopPropagation()}
                />
              </Box>

              <Box width={[1, 0.4]} mb={[3, 0]}>
                <MonthPicker
                  label="Reach goal by"
                  date={goalDate}
                  onChange={handleMonthChange}
                />
              </Box>
            </Box>
          </form>

          <Box mb={4} as="section" aria-label="details card">
            <OutlinedCard>
              <Box
                p={3}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                width={1}
              >
                <Text variant="subtitle">Monthly amount</Text>
                <Text variant="headingMedium" color="brandSecondary">
                  {formatMoney(monthlyAmount)}
                </Text>
              </Box>
              <Box bg="blueGray10" py={3} px={4}>
                <Text variant="caption" textAlign={['center', 'left']}>
                  You’re planning{' '}
                  <strong>{totalMonths} monthly deposits</strong> to reach your{' '}
                  <strong>{formatMoney(totalAmount)}</strong> goal by{' '}
                  <strong>
                    {getLongMonthName(goalDate)} {goalDate.getFullYear()}.
                  </strong>
                </Text>
              </Box>
            </OutlinedCard>
          </Box>

          <Button fullWidth onClick={handleConfirmClick}>
            Confirm
          </Button>
        </CardContent>
      </Box>
    </Styled.Root>
  );
};

export default NewSavingPlan;
