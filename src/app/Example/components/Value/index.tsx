import React from 'react';
import { ValueSC } from './styles';

type PropTypes = {
  children: React.ReactNode;
};

const Value: React.FC<PropTypes> = ({ children }) => <ValueSC>{children}</ValueSC>;

export default Value;
