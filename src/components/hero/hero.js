import React, { useContext } from "react";

const Hero = () => {
  return (
    <div className="card justify-center h-96 bg-base-200 m-4">
      <div className="hero-content text-center mx-auto">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">Welcome to Filmtrack</h1>
          <p className="py-6">
            Filmtrack is an app to keep up with the latest movies.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Hero);
