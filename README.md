# Welcome
This project is based off the tutorial [React Tutorial with Popup Authentication: Build a React application using popup authentication and React Hooks](https://auth0.com/blog/build-react-apps-using-react-hooks-and-auth0-auth-popup/).

# TL:DR
Looking for an abbreviated version of the tutorial? Here is where you can find my crib notes - very much a work-in-progress as I follow along with the tutorial.

## Initial setup
### Our web application
This tutorial requires the latest version of React, which is `React v16.8.0-alpha.0`. This needs to be installed after [create-react-app](https://github.com/facebook/create-react-app) has been installed.
```
$ npx create-react-app react-auth0-popup
$ cd react-auth0-popup
$ npm run start

Verify that create-react-app has successfully installed by visiting [http://localhost:3000](http://localhost:3000) in your web browser.

$ npm install -S react@16.8.0-alpha.0 react-dom@16.8.0-alpha.0
```

### Auth0

#### Initial setup
To get started with [Auth0](https://auth0.com), please create a free account or sign in with your existing account.

Ready? Let's go:
+ Click on the big button in the upper right-hand corner that says `+ New Application`
  - Give the application a name (such as `react-auth0-popup`)
  - Click on `Single Page Web App`
  - Click on `Create`
+ Select `React` as the technology we are using for the web app

#### Create an API
Time to set up an API for our project:
+ Visit the [Auth0 API Dashboard](https://manage.auth0.com/#/apis)
+ Click on the big button in the upper right-hand corner that says `+ Create API`
  - Give an example name such as `tvshows-movie-api`
  - Give an example identifier such as `https://tvmoviesapi`
+ Click on the `Settings` tab and verify that our `name` and `identifier` are what we expect

## API
### Data
```
$ mkdir -p api/data
$ touch api/data/tvShows.json
  // Create some sample data
$ touch api/data/movies.json
  // Create some sample data

// Create a config file for our API
$ touch api/config.js
  // IMPORTANT: Be sure to add `api/config.js` to `.gitignore` so you do not commit your credentials!!
```
