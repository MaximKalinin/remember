import * as React from 'react';
import styled from 'styled-components';
import * as firebase from 'firebase';
import { Formik } from 'formik';
import * as Yup from 'yup';

import H3 from './H3/H3';
import Input from './Input/Input';
import Button from './Button/Button';
import HomeButton from './HomeButton/HomeButton';
import OK from './OK/OK';

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

const AddEl = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
  justify-content: center;
`;

class Add extends React.Component {

  state = {
    statusShown: false
  };

  setStatus = (statusShown: boolean) => this.setState({ statusShown });

  addWord = (values) => {
    const { original, translation } = values;
    const userId = firebase.auth().currentUser.uid;
    const database = firebase.database();
    const words = database.ref(`/${userId}/words`);

    const newWord = words.push();

    return newWord.set(values);
  }

  render() {
    const { statusShown } = this.state;
    return (
      <AddEl>
        <HomeButton />
        {statusShown && <OK message="Слово добавлено!" hide={() => this.setStatus(false)} />}
        <Formik
          initialValues={{ original: '', translation: '' }}
          validationSchema={Yup.object().shape({
            original: Yup.string().required(),
            translation: Yup.string().required(),
          })}
          onSubmit={(values, actions) => {
            actions.setSubmitting(true);

            this.addWord(values).then(() => {
              this.setStatus(true);
              actions.setSubmitting(false);
              actions.resetForm();
            })
              .catch(err => console.log({ err }));
          }}
        >
          {({
            errors,
            touched,
            values,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
              <FormEl>
                <LabelEl>
                  <H3 margin="0 0 8px 0">Слово</H3>
                  <Input type="text" value={values.translation} onChange={handleChange} id="translation" error={touched.translation && errors.translation} onBlur={handleBlur} />
                </LabelEl>
                {touched.translation && errors.translation && <span style={{ color: 'red' }}>{errors.translation}</span>}
                <LabelEl>
                  <H3 margin="24px 0 8px 0">На русском</H3>
                  <Input type="text" value={values.original} onChange={handleChange} id="original" error={touched.original && errors.original} onBlur={handleBlur} />
                </LabelEl>
                {touched.original && errors.original && <span style={{ color: 'red' }}>{errors.original}</span>}
                <Button
                  type="button"
                  margin="24px 0 150px 0"
                  color="blue"
                  onClick={handleSubmit}
                >
                  Сохранить
                <span role="img" aria-label="door">🚪</span>
                </Button>
              </FormEl>
            )}
        </Formik>
      </AddEl>
    );
  }
}

export default Add;
