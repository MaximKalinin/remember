// @flow
import * as React from 'react';
import styled from 'styled-components';

import H3 from '../H3/H3';

const OKEl = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: green;
  padding: 20px;

  width: 100vw;
  animation: OKanim 1s ease-in-out;

  @keyframes OKanim {
    0% {
      transform: translateY(-100%);
    }
    20% {
      transform: translateY(0);
    }
    80% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }
`;

const OK = ({ message, hide }: { message: string, hide: () => void }) => (<OKEl onAnimationEnd={hide}><H3 color="white">{message}</H3></OKEl>);

export default OK;
