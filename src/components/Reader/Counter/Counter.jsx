import React from 'react';
import PropTypes from 'prop-types';
import css from './counter.module.css';

const Counter = ({ items, page }) => (
  <p className={css.counter}>
    {page + 1}/{items.length}
  </p>
);

Counter.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  page: PropTypes.number.isRequired,
};

export default Counter;
