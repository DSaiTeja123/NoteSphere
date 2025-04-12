import React, { useState } from "react";
import { PasswordInput } from "../../components/index";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail, axiosInstance } from "../../utils/index";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    if (!password) {
      setError("Password is required");
      return;
    }

    setError(null);

    try {
      const response = await axiosInstance.post("/api/auth/login", {
        email: email,
        password: password,
      });

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/");
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-slate-50 py-12">
        <div className="w-full sm:w-96 bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleLogin}>
            <h4 className="text-3xl font-semibold mb-6 text-center text-slate-900">
              Login
            </h4>

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 mb-4 text-sm bg-slate-100 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
              value={email}
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <button
              type="submit"
              className="w-full mt-6 px-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold transition-all duration-200"
            >
              Login
            </button>

            <p className="text-sm text-center mt-4 text-slate-700">
              Not registered yet?{" "}
              <Link
                to="/signup"
                className="font-medium text-blue-600 hover:underline"
              >
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
