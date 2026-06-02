import { createSlice } from "@reduxjs/toolkit";
import { nowPlayingMovies } from "./movieData";

const moviesSlice = createSlice({
  name: "movies",
  initialState: nowPlayingMovies,
  reducers: {},
});

export default moviesSlice.reducer;
