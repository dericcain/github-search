# Shipt Github User Search
[https://shipt.dericcain.com](https://shipt.dericcain.com)

[![Build Status](https://semaphoreci.com/api/v1/dericcain/github-search/branches/master/badge.svg)](https://semaphoreci.com/dericcain/github-search)

## Installation
Clone it, install it, run it, test it, build, deploy it 🚀 (this assumes that you have [Yarn](https://yarnpkg.com/en/) installed)
```
git clone https://github.com/dericcain/github-search.git && cd github-search && yarn
yarn start // starts Webpack dev server
yarn test // starts the Jest test runner
yarn build // creates a './build' folder for deployment
```
## Preface
All of the decisions I made are solely based on preference. I do not have any "sacred cows" when it comes to technology choices, styles, tabs vs spaces, etc. Well, maybe the last one I do because, well... spaces are far superior to tabs 😅. Basically, I am open to trying different things, learning different things and I always want be open-minded and flexible.

## Problem
Shipt needs a way to quickly and easily search for Github users and a user's followers.

## Solution
Create a single page application, utilizing the Github API, that will perform a search based on a Github username and display the results of that query and a readable format.

## UX/Branding
#### Mockups
I started off by creating mockups as this really helps with thinking about the user experience before I start to code. This is not a necessity, but can definitely help. You can see them here:
- [Landing](https://www.dropbox.com/s/i8bsu42zwymmm3e/landing-mockup.jpg?dl=0)
- [Search](https://www.dropbox.com/s/jbcwwrv1iizoffi/search-mockup.jpg?dl=0)
- [Results](https://www.dropbox.com/s/r25hf7ohvmynqy0/results-mockup.jpg?dl=0)
 
#### Branding
For branding, since this is a Shipt product, I totally chose to use Shipt's branding! I relied heavily on the [Help](http://help.shipt.com/) page for style guidelines 😄. 


## Technical Decisions
#### Create React App
I made the decision to use [Create React App](https://github.com/facebookincubator/create-react-app) for this project because it makes it really easy to get up and going with a React, with very little (if any) configuration needed.

#### Mobx
For state management, I chose to use Mobx because it is a real joy to work with. Coming from a more Object Oriented background, Mobx resonates a little better with me than Redux. And for a project this size, it also reduces a lot of boilerplate and scales really well. With that said, there is nothing wrong with Redux and I do admire its more functional approach and for larger projects, it may make more sense.

#### Styled Components
The only other non-dev dependency, in terms of code, is [Styled Components](https://www.styled-components.com). I started using Style Components about 2 months ago and I absolutely love it! It makes stying components in React so much easier, better, more fun 😃 than some other alternatives. One thing that I noticed when using Styled Components is that it forces me to really think about building components that are modular and independent. Now, one con (if you want to call it that) is it leaves a lot of options open for how to structure your styled components. Essentially, the components that are styled with Styled Components are just blocks of CSS. Here are some scenarios (definitely not all):
1. Put each styled component in its own file. This keeps components separate but also adds a ton of additional, really small, files to the project.
2. Leave the styled components in the file where they are being used. This makes sense in terms of "component architecture". However, it can look a little messy when you have your main component and, what seems to be, a bunch of random CSS blocks below that component (or above depending how you structure it).
3. Create one file per component category that holds all of the styled components. For instance, if we have a `Search` component, we may also have an `Input` and `Results` and a folder called `search`. In that folder, we have a file called `styled-components.js` (or something else) where all of the components reside. So, like this:
```
|-- components
|   |-- search
|   |   |-- Search.js
|   |   |-- Results.js
|   |   |-- Input.js
|   |   |-- styled-components.js // Here they are!
```
I tried #3 for this project and I do like how it looks/feels. I will keep experimenting until I find something that I just love.

#### Sentry
For error tracking, I used [Sentry.io](https://sentry.io). I have used Rollbar before, but I am much happier with Sentry. It has some really cool features (like user context) that Rollbar does not have (or maybe not as obvious). Also, it seems to make it a lot easier to see where the error occurred, when there is one. And, one more feature, it can create an issue in Gitlab automatically when there is an error (we use Gitlab where I currently work but I'm sure it works with Github as well).

#### Semaphore CI
I am using [Semaphore CI](https://semaphoreci.com) for Continuous Integration/Continuous Deployment. They make it super easy to integrate with Github and also AWS S3. I do not even have to create any config files. One really neat feature is that if there is a problem with a deployment, they create a one-time SSH session where you can log in and see your build and troubleshoot it. Pure genius!

#### AWS S3 & Cloudfront
Amazon Web Services makes it really easy to get a static site live on the web. I am using S3 to store the actual application and Cloudfront as a CDN for the application. They offer a free SSL and the site loads are 🔥BLAZING🔥 fast.

Now, I am not sure if I would use this for a large project. However, I am stating this simply as a lack of research on my part. They may be well suited for that. I would just think that EC2 may be a better option, given that is what the service is built to do.

#### Some extra stuff
A couple of things about performance. For the search request, I am memoizing the results to save on API calls. Also, I am debouncing the search so that if a user us a speed typer and they type out `gaearon` really quick, there may actually only be one request 👌

#### Things left out/Things would have done differently considering
One thing you will notice is that I do not use comments on all of my code. I used to document every variable and method but then I learned how to name my variables and methods so that they are self-documenting (at least I try to do this). If Shipt is a shop that wants every bit of code documented, I do not mind doing that at all.

Given more time or a larger project scope, I would have added a couple of extra things. I would have quite possibly just started the project from scratch with a custom Webpack config tailored specifically for the project. That is not to take away from Create React App - it is an amazing project and makes it so easy to get started fast.

I would have also used a couple of Github integrations. One being [Snyk](https://snyk.io/) for dependency security. Snyk is great at letting you know when one of your project's dependencies has a known vulnerability. I have even had Snyk make a PR to fix a known vulnerability. 

For a truly production application, there would be better test coverage and this is where [Coveralls](https://coveralls.io/) would assist. Coveralls aids in communicating the amount of code that is covered with the project's tests. Another really cool thing it does is with each PR, Coveralls can run the PR's test coverage against the current test coverage and report the difference if there is any, which is very helpful for maintaining good test coverage.

Lastly, if this was an app that was used all the time and we really wanted to sweat over performance, we could use the Service Worker to cache requests for a user in case they typically search for the same user more than once.

## Additional Links
- Most of the projects that I work on are private repos for my current employer, but here is a project that I was working on (we have 4-month-old so time has been limited lately) [Securely](https://github.com/securely-app/web).
- [Resume](https://www.dropbox.com/s/1ylo0doe01smoi2/Deric%20Cain%2C%20Full%20Stack%20Developer.pdf?dl=0)
- Here is a link to the hosted application [https://shipt.dericcain.com](https://shipt.dericcain.com)
