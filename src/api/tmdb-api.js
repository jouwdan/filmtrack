export const getMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    );
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};
  
export const getMovie = async (args) => {
  // console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};
  
  export const getGenres = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
    );
    const json = await res.json();
    return json.genres;
  };
  
  export const getMovieImages = async ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  };