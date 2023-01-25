import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={css.statistics__list}>
      <li className={css.statistics__item}>
        <p>Good: {good}</p>
      </li>
      <li className={css.statistics__item}>
        <p>Neutral: {neutral}</p>
      </li>
      <li className={css.statistics__item}>
        <p>Bad: {bad}</p>
      </li>
      <li className={css.statistics__item}>
        <p>Total: {total}</p>
      </li>
      <li className={css.statistics__item}>
        <p>Positive feedback: {positivePercentage}</p>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
