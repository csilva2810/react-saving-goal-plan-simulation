import styled, { css } from 'styled-components';

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.blueGray900};
  font-size: 14px;
  line-height: 150%;
  margin-bottom: 4px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  transition: 0.3s;

  ${({ theme }) => css`
    padding: ${theme.space[2]}px ${theme.space[1]}px;
    border: 1px solid ${theme.colors.blueGray100};
    border-radius: ${theme.radii[1]};
  `}
`;

export const Icon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.radii[1]};
  cursor: pointer;
`;

export const Date = styled.div`
  flex-grow: 1;
  text-align: center;
`;
