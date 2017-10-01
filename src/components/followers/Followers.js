import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

import {
  Follower,
  FollowersGrid,
  FollowersGridContainer,
  ShowMoreButton,
} from './';

@inject('searchStore')
@observer
class Followers extends Component {
  render() {
    const { followers } = this.props.searchStore;

    return (
      <FollowersGridContainer>
        <FollowersGrid>
          {followers &&
            followers.map((follower, key) => <Follower follower={follower} key={key} />)}
        </FollowersGrid>
        <ShowMoreButton />
      </FollowersGridContainer>
    );
  }
}

export { Followers };
