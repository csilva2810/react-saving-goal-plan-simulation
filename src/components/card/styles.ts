import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.surfaceBackground};
  border-radius: ${({ theme }) => theme.radii[2]};
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
`;

export const CardContent = styled.div`
  padding: ${({ theme }) => theme.space[3]}px;
`;

export const OutlinedCard = styled(Card)`
  box-shadow: none;
  border: 1px solid ${({ theme }) => theme.colors.blueGray100};
`;
