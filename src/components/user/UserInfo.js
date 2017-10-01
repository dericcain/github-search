import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

import { Followers } from '../followers';
import {
  UserInfoAvatar,
  UserInfoDetails,
  UserInfoFollowerCount,
  UserInfoFollowerCountBadge,
  UserInfoHandle,
  UserInfoWrapper,
  WaitingMessage,
} from './';
import { thousandsSeparator } from '../../utils/formatter';

@inject('searchStore')
@observer
class UserInfo extends Component {
  renderUserInfo() {
    const { user } = this.props.searchStore;

    if (!user) {
      return null;
    }
    const { avatar_url, followers, login } = user;
    return (
      <UserInfoDetails>
        <UserInfoAvatar src={avatar_url} />
        <UserInfoHandle>@{login}</UserInfoHandle>
        <UserInfoFollowerCount>
          Followers <UserInfoFollowerCountBadge>{thousandsSeparator(followers)}</UserInfoFollowerCountBadge>
        </UserInfoFollowerCount>
      </UserInfoDetails>
    );
  }

  render() {
    return (
      <UserInfoWrapper>
        <WaitingMessage isActive={!this.props.searchStore.user} />
        {this.renderUserInfo()}
        <Followers />
      </UserInfoWrapper>
    );
  }
}

export default UserInfo;
