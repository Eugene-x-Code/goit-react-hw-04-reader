import React from 'react';
import PropTypes from 'prop-types';
import css from './controls.module.css';

const Controls = ({ items, page, handleChangePage }) => (
  <section className={css.controls}>
    <button
      type="button"
      className={css.button}
      name="previous"
      onClick={handleChangePage}
      disabled={!page}
    >
      Назад
    </button>
    <button
      type="button"
      className={css.button}
      name="next"
      onClick={handleChangePage}
      disabled={page === items.length - 1}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  page: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
};

export default Controls;
