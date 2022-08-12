# ICT Skills 2 Assignment.

Name: Jordan Harrison

## Overview.

Filmtrack is a React & Firebase app that uses the TMDB API to track movies and keep a log of favourites & a watch list.

- Firebase user login & database
- Axios for API calls
- TailwindCSS & DaisyUI Design System
- Functional searching
- Similar movies on single movie page
- React-persist for persistent variables

## Setup requirements.

- Clone this repository
- Rename `.env.example` to `.env` and fill in your API & Firebase details
- Install dependancies with `npm i`
- Run the application using `npm start`

## App Design.

### Routing/Navigation

- /login - Log into the application
- /register - Register an account
- /reset - Reset your password
- /account - Account page
- /movies/popular - Show popular movies
- /movies/trending - Show trending movies
- /movies/upcoming - Show upcoming movies
- /movies/search - Search for a movie
- /movies/:id - Show details for a specific movie
- /tv/popular - Show popular TV shows
- /tv/top - Show top rated TV shows

### Views/Pages.

[ For each view in your app, show a screenshot and caption - only new/modified ones in the case of the Movies Fan app. If necessary, use multiple screenshots to cover a view's full capability.

e.g.

> Lists movies from the Discover endpoint. Filtering on title and genre attributes is supported.

![][logo192]

> Shows detailed information on a specific movie

![][logo192]

### Component catalogue.

[ Use the Storybook UI to highlight the new components for which you developed stories.]
e.g.

![][logo192]

## Caching.

[ List the TMDB server state cached by the app. Include a screenshot(s) of the react-query dev tools to validate your list.]

e.g.

- Discover movies (pagination support)
- Movie details
- etc
- etc

![][logo192]

## Authentication.

Authentication has been implemented using Firebase. I wrote [a post on how I implemented this on my blog](https://jord.dev/how-to-build-a-simple-login-system-with-react-firebase).

## Server-side persistence

User favourites are persisted in a firestore database, and are stored a variable in the context provider when logged in.

## Additional features

The site is designed to be used mobile-first, with many of the design elements being able to be compressed down to a smaller screen size.

## Independent learning

Since I started my new role as an Associate Software Engineer, the stack I am working with is very react-based. I have done lots of independant learning, with the most notable sources being [The Beginner's Guide to React by Kent C Dodds](https://egghead.io/courses/the-beginner-s-guide-to-react) and [udemy](https://www.udemy.com/).

[logo192]: ./public/logo192.png
