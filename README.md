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

## Authentication.

Authentication has been implemented using Firebase. I wrote [a post on how I implemented this on my blog](https://jord.dev/how-to-build-a-simple-login-system-with-react-firebase).

## Server-side persistence

User favourites are persisted in a firestore database, and are stored a variable in the context provider when logged in.

## Additional features

loading animation (red bar at top of screen)
axios for api calls

## Independent learning

Since I started my new role as an Associate Software Developer, the stack I am working with is very react-based. I have done lots of independant learning, with the most notable sources being [The Beginner's Guide to React by Kent C Dodds](https://egghead.io/courses/the-beginner-s-guide-to-react) and [udemy](https://www.udemy.com/).


[logo192]: ./public/logo192.png
[log-in]: ./public/log-in.png
[register]: ./public/register.png
[reset]: ./public/reset.png
[account]: ./public/account.png
[search]: ./public/search.png
[singleview]: ./public/singleview.png
