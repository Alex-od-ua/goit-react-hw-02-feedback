import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onFeedbackButtonClick }) => {
  return (
    <ul className={css.feedback__buttons}>
      {options.map(option => (
        <li className={css.feedback__list} key={option}>
          <button
            className={css.feedback__buttonsItem}
            type="button"
            name={option}
            onClick={() => onFeedbackButtonClick(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFeedbackButtonClick: PropTypes.func.isRequired,
};
