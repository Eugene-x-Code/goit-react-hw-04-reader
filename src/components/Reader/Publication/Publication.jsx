import React from 'react';
import PropTypes from 'prop-types';
import css from './publication.module.css';

const Publication = ({ items, page }) => (
  <article className={css.publicaton}>
    <h2 className={css.publicationTitle}>{items[page].title}</h2>
    <p className={css.publicationText}>{items[page].text}</p>
  </article>
);

Publication.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  page: PropTypes.number.isRequired,
};

export default Publication;
