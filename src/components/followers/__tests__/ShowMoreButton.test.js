import React from 'react';

import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { ShowMoreButton } from '..';
import SearchStore from '../../../stores/SearchStore';

describe('<ShowMoreButton />', () => {
  let store, buttonComponent;

  beforeAll(() => {
    store = SearchStore;
    store.getMoreFollowers = jest.fn();
    buttonComponent = shallow(<ShowMoreButton searchStore={store} />);
  });

  it('should match the snapshot', () => {
    const buttonComponent = renderer.create(<ShowMoreButton searchStore={store} />).toJSON();
    expect(buttonComponent).toMatchSnapshot();
  });

  it('getsMoreFollowers when the handleOnClick method is fired', () => {
    buttonComponent
      .dive()
      .instance()
      .handleOnClick();
    expect(store.getMoreFollowers).toHaveBeenCalled();
  });
});
