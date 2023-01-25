import { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { SectionH2, SectionH1 } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackButtonClick = state => {
    this.setState(prevState => {
      return {
        [state]: prevState[state] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    if (good) {
      return Math.round((good / (good + neutral + bad)) * 100) + '%';
    } else {
      return '0%';
    }
  };

  render() {
    return (
      <div className={css.app__container}>
        <div className={css.feedback}>
          <SectionH1 title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onFeedbackButtonClick={this.onFeedbackButtonClick}
            />
          </SectionH1>

          <SectionH2 title="Statistics:">
            {this.countTotalFeedback(this.state) > 0 ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage(
                  this.state
                )}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </SectionH2>
        </div>
      </div>
    );
  }
}
