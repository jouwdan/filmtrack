import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../firebase";
function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);
  return (

    <div class="flex pt-6">
        <div class="card shadow-2xl bg-base-200 flex-1 justify-center p-12">
            <div class="card-header">
                <h2 className="text-3xl">Reset Filmtrack Password</h2>
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
          <button
            className="btn btn-primary w-full"
            onClick={() => sendPasswordReset(email)}
          >
            Send password reset Email
          </button>
          <div className="justify-end">
            Don't have an account? <Link to="/register" className="link">Register now</Link>.
          </div>
        </div>
      </div>
      </div>
  );
}
export default Reset;