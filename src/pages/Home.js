import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

import Hero from "../components/hero/hero";

function Home() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) return navigate("/dashboard");
  }, [user, loading]);
  return (
    <>
      <Hero />
    </>
  );
}

export default Home;
