import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import SearchStore from '../../../stores/SearchStore';
import { Result } from '../';

describe('<Result />', () => {

  // We need to pass the store as a prop and mock our store functions
  let store, mockGetUser, mockGetFollowers, mockResult, resultComponent;

  beforeAll(() => {
    store = SearchStore;
    store.getFollowers = jest.fn();
    store.getUser = jest.fn();
    // Our Result component needs a result prop with these properties 
    // login, avatar_url, url, followers_url
    mockResult = {
      login: 'github.user',
      avatar_url: 'https://google.com',
      avatar_url: 'https://yahoo.com',
    }
    resultComponent = shallow(<Result result={mockResult} searchStore={store} />);
  });

  it('should match the snapshot', () => {
    const resultComponent = renderer.create(<Result result={mockResult} searchStore={store} />).toJSON();
    expect(resultComponent).toMatchSnapshot();
  });

  it('should make a request to get a users info when handleOnClick is called', () => {
    resultComponent.dive().instance().handleOnClick();
    expect(store.getUser).toHaveBeenCalled();
  });

  it('should make a request to get a users followers when handleOnClick is called', () => {
    resultComponent.dive().instance().handleOnClick();
    expect(store.getFollowers).toHaveBeenCalled();
  });
  
});