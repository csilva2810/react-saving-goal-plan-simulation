import * as React from 'react';
import { ReactSVG } from 'react-svg';

import logo from '../../icons/logo.svg';

import * as Styled from './styles';

const Header = () => (
  <Styled.Header>
    <ReactSVG src={logo} />
  </Styled.Header>
);

export default Header;
