import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

import { ButtonSpinner, Button } from '../shared';

@inject('searchStore')
@observer
class ShowMoreButton extends Component {
  constructor() {
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.props.searchStore.getMoreFollowers();
  }

  render() {
    const { isLoadingMore, nextPageOfFollowersLink } = this.props.searchStore;

    if (!nextPageOfFollowersLink) {
      return null;
    }

    const textStyles = {
      display: isLoadingMore ? 'none' : 'inline',
    };

    return (
      <Button onClick={this.handleOnClick}>
        <ButtonSpinner isLoading={isLoadingMore} color="#FFFFFF" />
        <span style={textStyles}>Load more...</span>
      </Button>
    );
  }
}

export { ShowMoreButton };
