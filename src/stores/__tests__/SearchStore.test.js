import SearchStore from '../SearchStore';

jest.useFakeTimers();

describe('SearchStore', () => {

  it('should update the search term', () => {
    SearchStore.updateSearchTerm('testing');
    expect(SearchStore.searchTerm).toBe('testing');
  });

  it('should set isLoading state to true when a search is performed', async () => {
    SearchStore.updateSearchTerm('s');
    await SearchStore.search();
    jest.runAllTimers();
    expect(SearchStore.isLoading).toBeTruthy();
  });
  
  it('should set the resultSet to an empty array if the search term is empty', async () => {
    SearchStore.updateSearchTerm('');
    await SearchStore.search();
    jest.runAllTimers();
    expect(SearchStore.resultSet.length).toBe(0)
  });

  it('should update the resultSet', () => {
    const mockValues = [1, 2, 3];
    SearchStore.updateResultSet(mockValues);
    expect(SearchStore.resultSet.length).toBe(mockValues.length);
  });
  
  it('should update the loading state', () => {
    SearchStore.updateIsLoading(true);
    expect(SearchStore.isLoading).toBeTruthy();
  });

});