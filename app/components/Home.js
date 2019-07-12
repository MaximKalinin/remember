//@flow
import * as React from 'react';
import { Redirect, Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button/Button';

type Props = {
  isAuth: boolean
}

const HomeEl = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
  justify-content: center;
`;

const Home = ({ isAuth }: Props) => {
  console.log({ isAuth });
  if (!isAuth) {
    return <Redirect to="/hello" />;
  }
  return (
    <HomeEl>
      <Link to="/exercise">
        <Button color="blue" margin="0 0 50px 0">Тренировка🤜</Button>
      </Link>
      <Link to="/add">
        <Button color="blue">Добавить слова✏️</Button>
      </Link>
    </HomeEl>
  );
};

export default Home;
