import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

import { Avatar, Name, ResultWrapper } from './';
import searchIcon from '../../assets/images/search-icon.png';

@inject('searchStore')
@observer
class Result extends Component {
  handleOnClick(userUrl, followersUrl) {
    this.props.searchStore.getUser(userUrl);
    this.props.searchStore.getFollowers(followersUrl);
    this.props.searchStore.updateSearchTerm('');
  }

  render() {
    const { login, avatar_url, url, followers_url } = this.props.result;

    return (
      <ResultWrapper onClick={this.handleOnClick.bind(this, url, followers_url)}>
        <Avatar src={avatar_url} />
        <Name>{login}</Name>
        <img className="search-result-icon" src={searchIcon} alt={`View ${login}`} />
      </ResultWrapper>
    );
  }
}

export { Result };
