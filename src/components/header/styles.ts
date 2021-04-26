import styled, { css } from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  ${({ theme }) => css`
    height: ${theme.sizes.header};
    padding: ${theme.space[2]}px;
    background-color: ${theme.colors.surfaceBackground};
  `};
`;
