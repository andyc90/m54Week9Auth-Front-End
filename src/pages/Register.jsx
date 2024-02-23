// Import necessary React components and hooks
import React, { useState } from "react";

// Import styles for the Register page
import "../styles/Register.css";

// Functional component representing the registration form
const Register = ({ handleRegister }) => {
  // State hook to manage form data for username, email, and password
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Return JSX for the registration form
  return (
    <div className="background">
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={(e) => handleRegister(e, formData)}>
          {/* Input field for username */}
          <label>
            Username:
            <input
              type="text"
              name="username"
              className="register-input"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </label>
          <br />
          {/* Input field for email */}
          <label>
            Email:
            <input
              type="email"
              name="email"
              className="register-input"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
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
              className="register-input"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </label>
          <br />
          {/* Submit button for the registration form */}
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

// Export the Register component for use in other files
export default Register;
