import React from "react";
import { MovieContextProvider } from "../../Context";

import Navigation from "./Navigation";

export default {
  component: Navigation,
  decorators: [
    (Story) => <MovieContextProvider>{Story()}</MovieContextProvider>,
  ],
};

export const Primary = () => {
  return <Navigation />;
};
