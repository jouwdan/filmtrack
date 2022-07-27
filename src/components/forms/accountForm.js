import React, { useEffect, useState, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, db, updateUserProfile } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { MovieContext } from "../../Context";

function AccountForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const { currentUser } = useContext(MovieContext);

  const updateAccount = () => {
    updateUserProfile(currentUser, name, email);
    if (updateUserProfile) navigate("/account", { replace: true });
  };

  const fetchAccount = async () => {
    try {
      const q = query(
        collection(db, "users"),
        where("uid", "==", currentUser.id)
      );
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      setEmail(data.email);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) navigate("/login", { replace: true });
    fetchAccount();
  }, [user, loading]);

  return (
    <div className="flex pt-6">
      <div className="card shadow-2xl bg-base-200 flex-1 justify-center p-12">
        <div className="card-header">
          <h2 className="text-3xl">Update your Filmtrack account</h2>
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
              placeholder={name}
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
              placeholder={email}
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
              placeholder="Enter Your Password"
            />
          </div>
          <button className="btn btn-primary w-full" onClick={updateAccount}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccountForm;
