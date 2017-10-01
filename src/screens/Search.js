import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

import { AppContainer, Header, GithubLogo, ShiptLogo, Title } from '../components/layout';
import { InputSpinner } from '../components/shared';
import { SearchInput, Results, SearchContainer, SearchIcon } from '../components/search';
import UserInfo from '../components/user/UserInfo';
import githubLogo from '../assets/images/github-logo.svg';
import searchIcon from '../assets/images/search-icon.svg';
import shiptLogo from '../assets/images/shipt-logo.png';

@inject('searchStore')
@observer
class Search extends Component {
  constructor() {
    super();
    this.handleOnChange = this.handleOnChange.bind(this)
  }

 handleOnChange(event) {
    this.props.searchStore.updateSearchTerm(event.target.value);
    this.props.searchStore.search();
  };

  render() {
    return (
      <AppContainer>
        <Header>
          <ShiptLogo src={shiptLogo} />
          <GithubLogo src={githubLogo} />
          <Title>Github User Search</Title>
          <SearchContainer>
            <SearchIcon src={searchIcon} />
            <SearchInput
              placeholder="Start typing a Github username"
              onChange={this.handleOnChange}
              value={this.props.searchStore.searchTerm}
              name="search"
            />
            <InputSpinner isLoading={this.props.searchStore.isLoading} color="#71B045" />
            <Results />
          </SearchContainer>
        </Header>
        <UserInfo />
      </AppContainer>
    );
  }
}

export default Search;
