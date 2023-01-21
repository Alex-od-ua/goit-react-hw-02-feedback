import css from './Statistics.module.css';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <h2 className={css.statistics__title}>Statistics:</h2>
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
    </div>
  );
}
