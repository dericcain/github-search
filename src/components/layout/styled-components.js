import styled from 'styled-components';

import backgroundImage from '../../assets/images/github-bg.jpg';

export const AppContainer = styled.div`font-family: 'Roboto', sans-serif;`;

export const Header = styled.header`
  min-height: 320px;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  padding: 24px;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
`;

export const GithubLogo = styled.img`
  display: flex;
  margin: 12px auto;
  align-self: center;
`;

export const ShiptLogo = styled.img`
  position: absolute;
  top: 12px;
  left: 24px;
  height: 65px;

  @media (max-width: 768px) {
    height: 44px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 60px;
  text-align: center;
  align-self: center;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;
