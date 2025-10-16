import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/profile", {
          withCredentials: true, // sends cookie automatically
        });
        setUser(res.data);
      } catch (err) {
        console.error("Auth check failed:", err);
        setError("You are not logged in");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <p>Checking authentication...</p>;

  if (error) {
    // if not logged in, redirect or show message
    return (
      <div style={styles.container}>
        <p>{error}</p>
        <a href="/login" style={styles.link}>Go to Login</a>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Welcome, {user.name} 👋</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>

      <button
        onClick={async () => {
          await axios.post("http://localhost:5000/api/users/logout", {}, { withCredentials: true });
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
        style={styles.button}
      >
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "30px",
    borderRadius: "12px",
    background: "#f9f9f9",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  button: {
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "20px",
  },
  link: {
    color: "#4CAF50",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Dashboard;
