import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
    if (user) navigate("/dashboard", { replace: true });
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard", { replace: true });
  }, [user, loading]);

  return (
    <div className="flex pt-6">
      <div className="card shadow-2xl bg-base-200 flex-1 justify-center p-12">
        <div className="card-header">
          <h2 className="text-3xl">Register to Filmtrack</h2>
        </div>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button className="btn btn-primary w-full" onClick={register}>
            Register
          </button>
          <div className="justify-end">
            Already have an account?{" "}
            <Link to="/login" className="link">
              Login now
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
