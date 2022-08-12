import React from "react";
import Tv from "../cards/tvCard";

const TvList = ({ tv, action }) => {
  let tvCards = tv.map((m) => (
    <Tv key={m.id} tv={m} action={action} />
  ));
  return tvCards;
};

export default TvList;
