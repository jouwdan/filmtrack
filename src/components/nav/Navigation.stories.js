import React from "react";
import { MovieContext } from "../../Context";

import Navigation from "./Navigation";

export default {
  component: Navigation,
};

export const Primary = () => {
  <MovieContext>
    <Navigation />
  </MovieContext>;
};
