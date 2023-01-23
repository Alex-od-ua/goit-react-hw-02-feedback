import PropTypes from 'prop-types';
import css from './Section.module.css';

export const SectionH2 = ({ title, children }) => {
  return (
    <div>
      <h2 className={css.statistics__title}>{title}</h2>
      {children}
    </div>
  );
};

export const SectionH1 = ({ title, children }) => {
  return (
    <div>
      <h1 className={css.feedback__title}>{title}</h1>
      <ul className={css.feedback__buttons}>{children}</ul>
    </div>
  );
};

SectionH1.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

SectionH2.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
