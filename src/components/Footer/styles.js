import styled, { css } from 'styled-components';


export const FooterBase = styled.footer`
  background: ${({ background }) => css`${background}`};
  border-top: 1px solid var(--blackLighter);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: ${({ color }) => css`${color}`};;
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
