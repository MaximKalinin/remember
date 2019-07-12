//@flow
import * as React from 'react';
import { Redirect } from 'react-router-dom';

type Props = {
  isAuth: boolean
}

const HomePage = ({ isAuth }: Props) => {
  console.log({ isAuth });
  if (!isAuth) {
    return <Redirect to="/hello" />;
  }
  return null;
};

export default HomePage;
