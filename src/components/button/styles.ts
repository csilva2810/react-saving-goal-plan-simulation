import styled, { css } from 'styled-components';

type ButtonProps = {
  fullWidth?: boolean;
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
    background-color: ${theme.colors.brandPrimary};
    color: ${theme.colors.brandPrimaryText};
    border-radius: ${theme.radii[4]};
  `};

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `};
`;

export default Button;
