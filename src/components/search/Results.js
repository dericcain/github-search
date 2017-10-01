import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

import { Result, ResultsContainer } from './';

@inject('searchStore')
@observer
class Results extends Component {
  renderResults() {
    const { resultSet } = this.props.searchStore;
    if (!resultSet) return null;

    return resultSet.map((result, key) => <Result result={result} key={key} />);
  }

  render() {
    return <ResultsContainer>{this.renderResults()}</ResultsContainer>;
  }
}

export { Results };
