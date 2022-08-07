import React from "react";
import { MovieContext } from "../../Context";

import Navigation from "./Navigation";

export default {
  component: Navigation,
  decorators: [(Story) => <MovieContext>{Story()}</MovieContext>],
};

export const Primary = () => {
  return <Navigation />;
};
