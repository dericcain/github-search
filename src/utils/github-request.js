export let cachedSearch = [],
  cachedUser = [],
  cachedFollowers = [];

export async function searchRequest(searchTerm) {
  if (!searchTerm) return null;
  const url = `https://api.github.com/search/users?q=${searchTerm}`;
  return await githubRequest(url, cachedSearch);
}

export async function userInfoRequest(userInfoUrl) {
  return await githubRequest(userInfoUrl, cachedUser);
}

export async function followersRequest(followersUrl) {
  return await githubRequest(followersUrl, cachedFollowers, true);
}

async function githubRequest(url, cacheName, shouldReturnHeaders = false) {
  // We are memoizing our results, so we need to check and see if we have already memoized them
  if (cacheName[url]) {
    return cacheName[url];
  }

  try {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    if (shouldReturnHeaders) {
      const links = parseLinkHeader(response.headers.get('Link'));
      const responseWithLinks = {
        followers: jsonResponse, 
        links
      };
      cacheName[url] = responseWithLinks;
      
      return cacheName[url];
    }
    
    cacheName[url] = jsonResponse;
    return cacheName[url];
  } catch (error) {
    // todo: throw an error here
    throw new Error(error);
  }
}

function parseLinkHeader(linkHeader) {
  if (!linkHeader) return null;
  // Split parts by comma
  var parts = linkHeader.split(',');
  var links = {};
  
  // Parse each part into a named link
  parts.forEach(link => {
    var section = link.split(';');
    if (section.length !== 2) {
      throw new Error("section could not be split on ';'");
    }
    var url = section[0].replace(/<(.*)>/, '$1').trim();
    var name = section[1].replace(/rel="(.*)"/, '$1').trim();
    links[name] = url;
  });

  return links;
}
