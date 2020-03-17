import styled from "styled-components";

import { MediaQueries } from "../helpers/media-queries";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 100vh;
  padding: 20px;
  background: ${({ theme }) => theme.colors.primary};

  ${MediaQueries.BIGGER_THAN_SMALL} {
    justify-content: center;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  ${MediaQueries.BIGGER_THAN_SMALL} {
    margin-top: 0px;
  }
`;

export const Logo = styled.img`
  width: 80px;
  height: auto;
  margin-bottom: 25px;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  color: white;
`;

export const Informations = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${MediaQueries.BIGGER_THAN_SMALL} {
    flex-direction: row;
    margin-top: 100px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;

  ${MediaQueries.BIGGER_THAN_SMALL} {
    position: absolute;
    bottom: 0;
  }
`;

export const Link = styled.a`
  &:hover {
    svg {
      transition: all 0.3s ease;
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }

  ${MediaQueries.BIGGER_THAN_SMALL} {
    margin-bottom: 20px;
  }
`;