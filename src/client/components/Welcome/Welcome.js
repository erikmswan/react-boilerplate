import './Welcome.scss';
import * as React from 'react';
import { CSSTransition } from 'react-transition-group';
import { hot } from 'react-hot-loader';
import { CheckIcon, XIcon } from 'components';

export class Welcome extends React.Component {

  defaultScreen = 'start';
  
  state = {
    screen: this.defaultScreen
  }

  changeToDefaultScreen = () => this.setState({ screen: this.defaultScreen });

  changeScreen = newScreen => () => {
    this.setState({ screen: newScreen });
    setTimeout(this.changeToDefaultScreen, 1500);
  };
  
  render() {
    const { screen } = this.state;

    return (
      <div className='welcome-container'>
        <CSSTransition
          in={screen === 'start'}
          appear
          timeout={300}
          classNames='fade-up'
        >
          <div className='welcome-screen welcome-screen_start'>
            <h1 className='welcome-title'>Hello World!</h1>
            <p className='welcome-cta'>Click one of these buttons!</p>
            <div className='welcome-button-container'>
              <button className='button-success' onClick={this.changeScreen('yes')}>Yes!</button>
              <button className='button-failure' onClick={this.changeScreen('no')}>No!</button>
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          in={screen === 'yes'}
          appear
          timeout={{
            enter: 500,
            exit: 300
          }}
          classNames='fade-in'
          unmountOnExit
        >
          <div className='welcome-screen welcome-screen_yes'>
            <h1>Great!</h1>
            <CheckIcon />
          </div>
        </CSSTransition>
        <CSSTransition
          in={screen === 'no'}
          appear
          timeout={{
            enter: 500,
            exit: 300
          }}
          classNames='fade-in'
          unmountOnExit
        >
          <div className='welcome-screen welcome-screen_no'>
            <h1>Unfortunate!</h1>
            <XIcon />
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default hot(module)(Welcome);
