# ICT Skills 2 Assignment.

Name: Jordan Harrison

## Overview.

Filmtrack is a React & Firebase app that uses the TMDB API to track movies and keep a log of favourites & a watch list.

e.g.

- Firebase user login & database
- TailwindCSS & DaisyUI Design System
- Functional searching
- Similar movies on single movie page
- React-persist for persistent variables

## Setup requirements.

- Clone this repository
- Rename `.env.example` to `.env` and fill in your API & Firebase details
- Install dependancies with `npm i`
- Run the applicaation using `npm start`

## App Design.

### Routing/Navigation.

[List the set of routes your app supports - only mention new instances if you expanded the Movies Fan app. State the view linked with each route.]

e.g.

- /login - Log into the application
- /register - Register an account
- /reset - Reset your password
- /account - Account page
- /movies/popular - Show popular movies
- /movies/trending - Show trending movies
- /movies/upcoming - Show upcoming movies
- /movies/search - Search for a movie
- /movies/:id - Show details for a specific movie

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

## Authentication (if relevant).

[Briefly state how you implemented authentication for the app, e.g. basic, Firebase, etc. Also, list the routes that are private/protected.]

e.g.

- /reviews/:id
- /movies/favourites

## Server-side persistence (if relevant)

[ Specify the persistence
platform your app uses (e.g. TMDB lists, Firestore) and itemize the data it persists.]

## Additional features (if relevant),

[Mention any additional user features of your app that may not be obvious from the previous sections, e.g. pagination, extended filtering/sorting, searching.]

## Independent learning (if relevant),

[Briefly explain any aspects of your assignment work that required independent learning (i.e. not addressed in the lectures or labs) on your behalf., e.g. 3rd-party components, libraries, tools. Include source code references.]

[logo192]: ./public/logo192.png
