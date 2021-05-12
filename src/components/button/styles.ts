import styled, { css } from 'styled-components';
import { variant } from 'styled-system';

type ButtonProps = {
  fullWidth?: boolean;
  isSmall?: boolean;
  variant?: 'primary' | 'default';
};
const Button = styled.button<ButtonProps>`
  min-width: 150px;
  max-width: 100%;
  font-family: Work Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  border: 0;

  ${({ theme }) => css`
    height: ${theme.sizes.button};
    padding: ${theme.space[1]}px ${theme.space[2]}px;
  `};

  ${variant({
    variants: {
      default: {
        bg: 'background',
        color: 'brandSecondary',
        borderRadius: 2,
      },
      primary: {
        bg: 'brandPrimary',
        color: 'brandPrimaryText',
        borderRadius: 4,
      },
    },
  })}

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `};

  ${(props) =>
    props.isSmall &&
    css`
      height: 40px;
    `};
`;

Button.defaultProps = {
  fullWidth: false,
  isSmall: false,
  variant: 'primary',
};

export default Button;
