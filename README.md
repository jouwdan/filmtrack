# ICT Skills 2 Assignment.

Name: Jordan Harrison

## Overview.

Filmtrack is a React & Firebase app that uses the TMDB API to track movies and keep a log of favourites & a watch list.

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
- /tv/popular - Show popular tv shows
- /tv/top - Show top rated tv shows

### Views/Pages.

> Account pages - Login, Register, Reset Password, My Account

![][log-in]
![][register]
![][reset]
![][account]

> Search movies

![][search]

> Single movie view

![][singleview]

### Component catalogue.

N/A - Storybook broken

## Caching.

Data stored in firebase + using react-persist library to store favourites

## Authentication (if relevant).

Auth is set up using firebase & data stored in firestore.

## Server-side persistence (if relevant)

Data stored in firestore, favourites & watch list stored in a collection.

## Additional features (if relevant),

loading animation (red bar at top of screen)
axios for api calls

## Independent learning (if relevant),

As my current job is react based, I have done a lor of independant learning - via learning from colleagues and learning using udemy. I also used Kent C Dodds' intro to react course, which was very informative.

[logo192]: ./public/logo192.png
[log-in]: ./public/log-in.png
[register]: ./public/register.png
[reset]: ./public/reset.png
[account]: ./public/account.png
[search]: ./public/search.png
[singleview]: ./public/singleview.png
