import styled from 'styled-components';

export const Root = styled.main`
  height: 100%;
  background: ${({ theme }) => theme.colors.background};

  strong {
    font-weight: ${({ theme }) => theme.fontWeights[2]};
  }
`;
