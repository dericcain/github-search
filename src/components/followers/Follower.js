import React, { Component } from 'react';

import { FollowerAvatar, FollowerGridItem, FollowerHandle } from './';

class Follower extends Component {
  render() {
    const { avatar_url, login } = this.props.follower;

    return (
      <FollowerGridItem>
        <FollowerHandle className="handle-popup">{login}</FollowerHandle>
        <FollowerAvatar src={avatar_url} />
      </FollowerGridItem>
    );
  }
}

export { Follower };
