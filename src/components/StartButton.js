import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Jogar</StyledStartButton>
)

export default StartButton;