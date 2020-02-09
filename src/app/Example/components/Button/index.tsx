import React from 'react';
import { ButtonSC, ImageSC } from './styles';

type PropTypes = {
  image: string;
  children: React.ReactNode;
  onClick: (event: React.MouseEvent) => void;
};

const Button: React.FC<PropTypes> = ({ image, children, onClick }) => (
  <ButtonSC type="button" onClick={onClick}>
    {Boolean(image) && <ImageSC src={image} alt="button" />}
    {children}
  </ButtonSC>
);

export default Button;
