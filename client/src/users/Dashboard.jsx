import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Dashboard = () => {

  const { user, logout, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Checking authentication...</p>;
  }

  if (!user) {
    // if not logged in, redirect or show message
    return (
      <div>
        <p>Not logged in. <a href="/login">Login here</a></p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Welcome, {user.name} </h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>

      <button onClick={logout} style={styles.button}
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
