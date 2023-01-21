// import PropTypes from 'prop-types';
import { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodButtonClick = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  onNeutralButtonClick = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  onBadButtonClick = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    // positiveFeedback = {
    //   good ?? Math.round((good / (good + neutral + bad)) * 100);
    // }

    if (good) {
      return Math.round((good / (good + neutral + bad)) * 100) + '%';
    }
  };

  render() {
    // total = this.state;

    // countTotalFeedback = this.state;
    // const { good, neutral, bad } = this.state;

    // const good = this.state.good;
    // const neutral = this.state.neutral;
    // const bad = this.state.bad;

    return (
      <div className={css.app__container}>
        <div className={css.feedback}>
          <h1 className={css.feedback__title}>Please leave feedback</h1>
          <ul className={css.feedback__buttons}>
            <li>
              <button
                className={css.feedback__buttonsItem}
                type="button"
                onClick={this.onGoodButtonClick}
              >
                Good
              </button>
            </li>
            <li>
              <button
                className={css.feedback__buttonsItem}
                type="button"
                onClick={this.onNeutralButtonClick}
              >
                Neutral
              </button>
            </li>
            <li>
              <button
                className={css.feedback__buttonsItem}
                type="button"
                onClick={this.onBadButtonClick}
              >
                Bad
              </button>
            </li>
          </ul>
          <div></div>

          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              this.state
            )}
          ></Statistics>
        </div>
      </div>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
