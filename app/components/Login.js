// @flow
import * as React from 'react';
import styled from 'styled-components';
import * as firebase from 'firebase';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { withRouter } from 'react-router-dom';

import H1 from './H1/H1';
import H3 from './H3/H3';
import Input from './Input/Input';
import Button from './Button/Button';
import BASE_URL from '../constants/endpoint';
import Spinner from './Spinner/Spinner';

const HeaderWrapper = styled.div`
    display: flex;
`;

const LoginEl = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
  justify-content: center;
`;

const LabelEl = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormEl = styled.form`
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

type Props = {
  setAuth: (isAuth: boolean) => void,
  history: *
}

type State = {
  isLoading: boolean
}

class Login extends React.Component<Props, State> {
  actionType: string;

  constructor(props: Props) {
    console.log('construct Login');
    super(props);

    firebase.initializeApp({
      apiKey: "AIzaSyAaAj0jvlSSRTMcdMF-8nik9_UAappvQHM",
      authDomain: "remember-8a6c2.firebaseapp.com",
      databaseURL: "https://remember-8a6c2.firebaseio.com/",
      storageBucket: "bucket.appspot.com"
    });

    firebase.auth().onAuthStateChanged(this.onAuth);

    this.actionType = 'null';

    this.state = {
      isLoading: true
    }
  }

  onAuth = user => {
    const { setAuth, history } = this.props;
    if (user) {
      setAuth(true);
      history.push('/');
    } else {
      console.log('not registered');
      this.setState({ isLoading: false });
    }
  };

  signup = (values: {
    email: string, password: string
  },
    action: {
      setSubmitting: (isSubmit: boolean) => void
    }) => {
    action.setSubmitting(true);
    firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
      .then((response) => {
        console.log({ response });
        action.setSubmitting(false);
      })
      .catch(err => console.log(err))
  };

  signin = (values: {
    email: string, password: string
  },
    action: {
      setSubmitting: (isSubmit: boolean) => void
    }) => {
    const { setAuth, history } = this.props;
    action.setSubmitting(true);
    firebase.auth().signInWithEmailAndPassword(values.email, values.password)
      .then((response) => {
        console.log({ response });
        action.setSubmitting(false);
      })
      .catch(err => console.log(err))
  };

  render() {
    const { isLoading } = this.state;
    if (isLoading) return <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}><Spinner /></div>
    return (
      <LoginEl>
        <HeaderWrapper>
          <H1>Все запомнишь</H1>
          <H1 color="blue">!</H1>
        </HeaderWrapper>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required()
          })}
          onSubmit={(values, actions) => {
            switch (this.actionType) {
              case 'signup':
                return this.signup(values, actions);
              case 'signin':
                return this.signin(values, actions);
              default:
                return;
            }
          }}>
          {({
            errors,
            touched,
            values,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting
          }) => (
              <FormEl>
                <LabelEl>
                  <H3 margin="0 0 8px 0">Почта</H3>
                  <Input type="email" value={values.email} onChange={handleChange} id="email" error={touched.email && errors.email} onBlur={handleBlur} />
                </LabelEl>
                {touched.email && errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                <LabelEl>
                  <H3 margin="24px 0 8px 0">Пароль</H3>
                  <Input type="password" value={values.password} onChange={handleChange} id="password" error={touched.password && errors.password} onBlur={handleBlur} />
                </LabelEl>
                {touched.password && errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                <Button
                  type="button"
                  margin="24px 0 8px 0"
                  color="blue"
                  onClick={(e: *) => {
                    this.actionType = 'signin';
                    handleSubmit(e);
                  }}>
                  Войти
                  <span role="img" aria-label="door">🚪</span>
                </Button>
                <span style={{ textAlign: 'center' }}>или</span>
                <Button
                  type="button"
                  margin="8px 0 0 0"
                  color="blue"
                  onClick={(e: *) => {
                    this.actionType = 'signup';
                    handleSubmit(e);
                  }}>
                  Зарегистрироваться
            <span role="img" aria-label="door">👨</span>
                </Button>
              </FormEl>
            )}
        </Formik>
        {false && <FormEl>
          <LabelEl>
            <H3 margin="0 0 8px 0">Логин</H3>
            <Input type="email" />
          </LabelEl>
          <LabelEl>
            <H3 margin="24px 0 8px 0">Пароль</H3>
            <Input type="password" />
          </LabelEl>
          <Button type="button" margin="24px 0 8px 0" color="blue">
            Войти
            <span role="img" aria-label="door">🚪</span>
          </Button>
          <span style={{ textAlign: 'center' }}>или</span>
          <Button type="button" margin="8px 0 0 0" color="blue">
            Зарегистрироваться
            <span role="img" aria-label="door">👨</span>
          </Button>
        </FormEl>}
      </LoginEl>
    );
  }
}

export default withRouter(Login);