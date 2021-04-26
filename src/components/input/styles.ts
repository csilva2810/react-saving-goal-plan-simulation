import styled, { css } from 'styled-components';

type ContainerProps = {
  isFocused?: boolean;
};
export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: border-color 0.3s;

  ${({ theme }) => css`
    height: ${theme.sizes.input};
    padding: ${theme.space[2]}px ${theme.space[1]}px;
    border: 1px solid ${theme.colors.blueGray100};
    border-radius: ${theme.radii[1]};
  `}

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border: 2px solid ${theme.colors.brandSecondary};
    `}
`;

export const Input = styled.input`
  display: block;
  flex-grow: 1;
  border: 0;
  outline: 0;
  background-color: transparent;
  font-family: Rubik;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.blueGray600};
`;
