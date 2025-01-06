import React, { createContext, useState, useEffect } from "react";
import API from "../utils/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      API.get("/auth/profile")
        .then((response) => setUser(response.data))
        .catch(() => logout());
    }
  }, []);

  const login = async (email, password, navigate) => {
     try {
      const { data } = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", data.token);
      setUser(data.user);
      setIsLoggedIn(true);
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        // Handle specific status codes
        if (error.response.status === 400) {
          alert("Bad request. Please check your input.");
        } else if (error.response.status === 401) {
          alert("Unauthorized. Incorrect email or password.");
        } else {
          alert("An error occurred. Please try again later.");
        }
      } else {
        // Handle network or other unexpected errors
        alert("Network error. Please check your connection.");
      }
    }
  };

  const register = async (name, email, password, navigate) => {
    try {
      const { data } = await API.post("/auth/register", { name, email, password });
      localStorage.setItem("token", data.token);
      setUser(data.user);
      alert("Registration successful!");
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Handle 400 Bad Request error
        alert(`Registration failed: ${error.response.data.message}`);
      } else {
        // Handle other errors
        alert("Something went wrong. Please try again.");
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;