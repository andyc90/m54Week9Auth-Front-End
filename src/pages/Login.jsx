// Import necessary React components and hooks
import React, { useState } from "react";

// Import styles for the Login page
import "../styles/Login.css";
import { Link } from "react-router-dom";

// Functional component representing the login form
const Login = ({ handleLogin }) => {
  // State hook to manage form data for username and password
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Return JSX for the login form
  return (
    <div className="background">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={(e) => handleLogin(e, formData)}>
          {/* Input field for username */}
          <label>
            Username:
            <input
              type="text"
              name="username"
              className="login-input"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              required
            />
          </label>
          <br />
          {/* Input field for password */}
          <label>
            Password:
            <input
              type="password"
              name="password"
              className="login-input"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </label>
          <br />
          {/* Create account button for the login form */}
          <Link className="create-account-button" to="/register">
            Create Account
          </Link>
          {/* Submit button for the login form */}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

// Export the Login component for use in other files
export default Login;
