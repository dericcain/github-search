import { observable, action } from 'mobx';
import { searchRequest, userInfoRequest, followersRequest } from '../utils/github-request';
import debounce from '../utils/debounce';

class SearchStore {
  @observable searchTerm = '';
  @observable isLoading = false;
  @observable resultSet = [];
  @observable user = null;
  @observable followers = [];
  @observable nextPageOfFollowersLink = null;
  @observable isLoadingMore = false;

  @action
  updateSearchTerm(searchTerm) {
    this.searchTerm = searchTerm;
  }

  // We want to debounce the results so we are not firing off unneeded requests
  // @action
  search = debounce(async () => {
    this.isLoading = true;
    if (!this.searchTerm) {
      this.updateResultSet([]);
    } else {
      const results = await searchRequest(this.searchTerm);
      this.updateResultSet(results.items);
    }
    // We are doing this because we are debouncing the 'change' event and want the loader
    // to show in between the debouncing
    setTimeout(() => this.updateIsLoading(false), 500);
  }, 300);

  @action
  updateResultSet(resultSet) {
    this.resultSet.replace(resultSet);
  }

  @action
  updateIsLoading(isLoading) {
    this.isLoading = isLoading;
  }

  @action
  async getUser(userUrl) {
    this.user = await userInfoRequest(userUrl);
    this.updateResultSet([]);
  }

  @action
  async getFollowers(followersUrl) {
    const { followers, links } = await followersRequest(followersUrl);
    this.followers.replace(followers);
    this.nextPageOfFollowersLink = links ? links.next : null;
  }

  @action
  async getMoreFollowers() {
    this.isLoadingMore = true;
    const { followers, links } = await followersRequest(this.nextPageOfFollowersLink);
    this.followers.replace([...this.followers, ...followers]);
    this.nextPageOfFollowersLink = links.next;
    this.isLoadingMore = false;
  }
}

// We instantiate this here so we only have one instance 
export default new SearchStore();
