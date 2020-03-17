import styled from "styled-components";

import { MediaQueries } from "../../helpers/media-queries";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 15px;

  ${MediaQueries.BIGGER_THAN_SMALL} {
    margin-right: 25px;
  }
`;

export const Counter = styled.h2`
  font-size: 52px;
  font-weight: bold;
  text-align: center;
  color: ${({ isHighlighted, theme }) => isHighlighted ? theme.colors.secondary : "white"};
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  color: ${({ theme }) => theme.colors.accent};
`;