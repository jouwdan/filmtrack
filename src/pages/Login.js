import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
      if (loading) {
        // maybe trigger a loading screen
        return;
      }
      if (user) navigate("/dashboard");
    }, [user, loading]);
    return (
        <div class="flex pt-6">
        <div class="card shadow-2xl bg-base-200 flex-1 justify-center p-12">
            <div class="card-header">
                <h2 className="text-3xl">Log In to Filmtrack</h2>
            </div>
        <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          </div>
          <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          </div>
          <button
            className="btn btn-primary w-full"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </button>
          <div>
            <Link to="/reset" className="btn btn-ghost w-full">Forgot Password</Link>
          </div>
          <div className="justify-end">
            Don't have an account? <Link to="/register" className="link">Register now</Link>.
          </div>
        </div>
      </div>
      </div>
    );
  }
  export default Login;