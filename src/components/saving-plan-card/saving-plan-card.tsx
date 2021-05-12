import * as React from 'react';

import { Card, CardContent, OutlinedCard } from '../card';
import Text from '../text';
import Box from '../box';
import Button from '../button';
import Icon from '../icon';

import { formatMoney } from '../../services/money';
import { getLongMonthName } from '../../services/date';

import { Saving } from '../../store';

type Props = {
  saving: Saving;
  onClickAction: React.MouseEventHandler<HTMLButtonElement>;
};

const SavingPlanCard = (props: Props) => {
  const { saving } = props;
  const isPlanned = saving.totalAmount && saving.goalDate;

  return (
    <Card>
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
          <Box mb={1}>
            <Icon name={saving.icon} />
          </Box>
          <Text variant="paragraph" fontWeight={2}>
            {saving.name}
          </Text>
        </Box>

        {isPlanned && (
          <Box
            py={2}
            px={1}
            mb={2}
            as={OutlinedCard}
            display="flex"
            alignItems="center"
            justifyContent="space-around"
          >
            <Box>
              <Text variant="caption" color="blueGray600">
                Goal amount
              </Text>
              <Text variant="paragraph" fontWeight={2} color="brandSecondary">
                {formatMoney(saving.totalAmount!)}
              </Text>
            </Box>

            <Box>
              <Text variant="caption" color="blueGray600">
                Reach goal by
              </Text>
              <Text variant="paragraph" fontWeight={2}>
                {getLongMonthName(saving.goalDate!)}{' '}
                {saving.goalDate!.getFullYear()}
              </Text>
            </Box>
          </Box>
        )}

        <Button fullWidth isSmall onClick={props.onClickAction}>
          {saving.totalAmount ? 'Edit goal' : 'Setup goal'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SavingPlanCard;
