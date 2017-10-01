import React from 'react';

import { WaitingMessageContainer } from './';
import octocat from '../../assets/images/octocat.png';

const WaitingMessage = ({ isActive }) => (
  <WaitingMessageContainer isActive={isActive}>
    <h2>I would be so happy if you would search for a Github user above!</h2>
    <img src={octocat} alt="The Github Octocat" />
  </WaitingMessageContainer>
);

export { WaitingMessage };
