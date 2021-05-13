import React from 'react';
import { RouteComponentProps } from 'react-router';

import Text from '../../components/text';
import Box from '../../components/box';
import SavingPlanCard from '../../components/saving-plan-card';
import { useStore } from '../../store/provider';

type Props = RouteComponentProps<{}, {}, { updatedSavingId?: number }>;

export default function SavingsList(props: Props) {
  const { history } = props;
  const {
    state: { savings },
  } = useStore();

  return (
    <Box bg="background">
      <Box height="100vh" padding={5} maxWidth="1136px" margin="0 auto">
        <Box mb={3}>
          <Text variant="headingMedium" fontWeight={1}>
            Here are your savings goals!
          </Text>
        </Box>

        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(min(272px, 100%), 1fr))"
          gridGap={2}
        >
          {savings.map((saving) => (
            <SavingPlanCard
              key={saving.id}
              saving={saving}
              onClickAction={() => {
                history.push(`/savings/${saving.id}`);
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
