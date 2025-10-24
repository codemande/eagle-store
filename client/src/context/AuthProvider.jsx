import { useState, useEffect } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";

export const AuthProvider = ({ children }) => {

  const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4100";

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on first load
  useEffect(() => {
    async function verifyUser() {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/users/profile`, {
          withCredentials: true, // send cookies
        });
        setUser(res.data);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  async function login(email, password) {
    const res = await axios.post(
      `${API_BASE_URL}/api/users/login`,
      { email, password },
      { withCredentials: true }
    );
    setUser(res.data.user);
    localStorage.setItem("user", JSON.stringify(res.data.user));
  };

  async function logout() {
    try{
      const res = await axios.post(`${API_BASE_URL}/api/users/logout`, {}, { withCredentials: true });
      setUser(null);
      localStorage.removeItem("user");
      return res.data.message;
    } catch(error){
      return error.response?.data?.error || "Logout failed";
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
