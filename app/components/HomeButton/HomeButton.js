import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import close from '../../images/close.svg';

const Image = styled.img`
  position: fixed;
  top: 24px;
  left: 24px;
`;

const HomeButton = () => <Link to="/"><Image src={close} /></Link>;

export default HomeButton;
