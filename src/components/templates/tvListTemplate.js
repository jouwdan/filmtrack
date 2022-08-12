import React, { useState } from "react";
import TvList from "../lists/tvList";

function TvListTemplate({ tv, title, action }) {
  return (
    <>
      <div className="card bg-base-200 m-4">
        <div className="flex flex-wrap items-stretch justify-center w-full py-4">
          <TvList action={action} tv={tv} />
        </div>
      </div>
    </>
  );
}
export default TvListTemplate;
