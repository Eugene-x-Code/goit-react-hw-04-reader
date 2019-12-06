import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';
import Publication from './Publication/Publication';
import css from './reader.module.css';

export default class Reader extends Component {
  componentDidMount() {
    const queryParams = this.getQueryParams();
    const { history } = this.props;
    if (!queryParams.item) {
      history.push({
        pathname: '/reader',
        search: 'item=1',
      });
    }
  }

  getQueryParams() {
    const { location } = this.props;
    return queryString.parse(location.search);
  }

  handleChangePage = ({ target }) => {
    const { history } = this.props;
    const { location } = this.props;
    const queryParams = this.getQueryParams();
    const item = parseInt(queryParams.item) + (target.name === 'next' ? 1 : -1);
    history.push({
      pathname: location.pathname,
      search: `item=${item}`,
    });
  };

  render() {
    const { items } = this.props;
    let page = parseInt(this.getQueryParams().item) - 1;
    if (isNaN(page)) {
      page = 0;
    }
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
  history: PropTypes.shape().isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};
