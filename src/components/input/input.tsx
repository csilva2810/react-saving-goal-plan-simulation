import * as React from 'react';

import Box from '../box';
import Text from '../text';
import * as Styled from './styles';

export type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
  label?: string;
};

const Input = (props: Props) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const { icon, label, ...inputProps } = props;

  return (
    <div>
      {label && (
        <Box mb="4px">
          <Text as="label" variant="label" htmlFor={inputProps.id}>
            {label}
          </Text>
        </Box>
      )}
      <Styled.Container isFocused={isFocused}>
        {icon}
        <Styled.Input
          {...inputProps}
          onFocus={(e) => {
            setIsFocused(true);
            if (inputProps.onFocus) inputProps.onFocus(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            if (inputProps.onBlur) inputProps.onBlur(e);
          }}
        />
      </Styled.Container>
    </div>
  );
};

export default Input;
