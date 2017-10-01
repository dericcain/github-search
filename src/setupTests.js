import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

// We do not want to make real calls the the Github API for our tests (Rate Limiting, etc.)
// so we will mock the fetch function
global.fetch = jest.fn().mockImplementation(() => {
  const promise = new Promise((resolve, reject) => {
    resolve({
      json() {
        return {
          incomplete_results: false,
          items: [  
            {
              avatar_url: 'https://link1.com',
              login: 'someuser',
            }
          ],
          total_count: 30
        }
      }
    })
  });
  return promise;
});
