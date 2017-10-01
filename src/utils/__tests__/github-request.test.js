import { searchRequest, cachedSearch } from '../github-request';

it('should cache results when a request is made', async () => {
  const response = await searchRequest('s');
  expect(Object.keys(cachedSearch).length).toBe(1);
  
  const response2 = await searchRequest('sr');
  expect(Object.keys(cachedSearch).length).toBe(2);

  const response3 = await searchRequest('s');
  expect(Object.keys(cachedSearch).length).toBe(2);
});