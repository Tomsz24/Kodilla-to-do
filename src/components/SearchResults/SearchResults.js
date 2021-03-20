import React from 'react';
import PropTypes from 'prop-types'
import Container from '../Container/Container.js'

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
  }
  state = {
    searchString: this.props.changeSearchString(this.props.history.location.pathname.replace('/search/', '')),
  }
  render() {
    const { cards } = this.props;
    return (
      <Container></Container>
    );
  }
}

export default SearchResults;