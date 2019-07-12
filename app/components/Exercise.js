import * as React from 'react';
import * as firebase from 'firebase';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import H3 from './H3/H3';
import HomeButton from './HomeButton/HomeButton';
import Spinner from './Spinner/Spinner';

const WordEl = styled.div`
  display: flex;
  height: 100vh;
  flex: 100vw 0 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  box-shadow: 0 0 59px rgba(0, 0, 0, 0.35);
  border-radius:  4px;
  z-index: ${({ zIndex }) => zIndex || 0};
  & > * {
    transition: opacity .3s;
  }

  &.animate {
    animation: animate 1s ease-in-out;
    & > * {
      opacity: 0;
    }
  }

  @keyframes animate {
  0% {
    transform: scale(1) translateX(0);
  }
  25% {
    transform: scale(0.8) translateX(-10%);
  }
  75% {
    transform: scale(0.8) translateX(-90%);
  }
  100% {
    transform: scale(1) translateX(-100%);
  }
}
`;

class Exercise extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [],
      stage: 'original',
      word: 0,
      animate: false,
      isLoading: true
    };

    this.database = firebase.database();
  }

  nextStage = () => {
    const { stage, word } = this.state;
    switch (stage) {
      case 'original':
        return this.setState({ stage: 'translation' });
      case 'translation':
        return this.setState({ animate: true });
      default:
        return;
    }
  }

  onAnimationEnd = () => {
    const { stage, word } = this.state;
    return this.setState({ word: word + 1, stage: 'original', animate: false });
  }

  componentDidMount() {
    const userId = firebase.auth().currentUser.uid;
    this.database.ref(`/${userId}/words`).on('value', words => this.setState({ words: shuffle(Object.keys(words.val()).map(key => words.val()[key])), isLoading: false }));
  }

  render() {
    const { words, word, stage, animate, isLoading } = this.state;
    console.log({ words, word, stage });
    const answerStyle = {
      opacity: stage === 'original' || animate ? 0 : 1,
    };
    if (isLoading) return <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}><Spinner /></div>;

    if (word >= words.length) {
      const EndEl = withRouter(End);
      return <EndEl />;
    }

    return (
      <div style={{ display: 'flex', background: '#CCCCCC', flexWrap: 'nowrap', overflowX: 'hidden' }}>
        <WordEl onClick={this.nextStage} className={animate && 'animate' || ''} zIndex={2}>
          <HomeButton />
          <H3 margin="0 0 20px 0">{words[word] && words[word].original}</H3>
          <div style={answerStyle}><H3 color="blue">{words[word] && words[word].translation}</H3></div>
        </WordEl>
        <WordEl className={animate && 'animate' || ''} onAnimationEnd={this.onAnimationEnd} zIndex={1} />
      </div>
    );
  }
}

class End extends React.Component {
  componentDidMount() {
    const { history } = this.props;
    setTimeout(() => history.push('/'), 1000);
  }

  render() {
    return (
      <WordEl>
        <H3>Все!</H3>
      </WordEl>
    );
  }
}

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default Exercise;
