import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';
import Publication from './Publication/Publication';
import css from './reader.module.css';

export default class Reader extends Component {
  state = { page: 0 };

  handleChangePage = ({ target }) => {
    this.setState(prevState => ({
      page: prevState.page + (target.name === 'next' ? 1 : -1),
    }));
  };

  render() {
    const { items } = this.props;
    const { page } = this.state;
    return (
      <div className={css.reader}>
        <Publication items={items} page={page} />
        <Counter items={items} page={page} />
        <Controls
          items={items}
          page={page}
          handleChangePage={this.handleChangePage}
        />
      </div>
    );
  }
}

Reader.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};
