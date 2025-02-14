import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [emailId, setEmailId] = useState("maeve@gmail.com");
  const [password, setPassword] = useState("Maeve@123");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      navigate("/");
    } catch (e) {
      setError(e?.response?.data || "Something went wrong");
      console.error(e);
    }
  };

  return (
    <div className="my-10 flex justify-center">
      <div className="card bg-base-300 w-96 shadow-xl bg-opacity-80">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <div>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Email Id:</span>
              </div>
              <input
                type="text"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Password:</span>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <p className="text-error font-semibold my-2 text-center">{error}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-neutral" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
