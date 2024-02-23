// Import necessary React components and hooks
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import page components for routing
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

// Import React Router hook for navigation
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// Main App component
function App() {
  // State hook for managing user data
  const [user, setUser] = useState();
  const [allUsers, setAllUsers] = useState();

  // Initialize the navigate function from React Router
  const navigate = useNavigate();

  // Function to handle user login
  const handleLogin = async (e, formData) => {
    e.preventDefault();
    console.log(formData);

    try {
      // Make a POST request to the server for user login
      const response = await fetch("http://localhost:5001/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Parse the response JSON data
      const data = await response.json();

      // If login is successful, set the user data and navigate to the home page
      if (data.user) {
        setUser(data.user);
        console.log(data.user);
        if (data.user.username === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        // If login fails, handle different scenarios and log details
        if (response.status === 401) {
          alert("Error: Invalid credentials");
        }
        console.log("Login failed:", data);
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  // Function to handle user registration
  const handleRegister = async (e, formData) => {
    e.preventDefault();
    console.log(formData);

    try {
      // Make a POST request to the server for user registration
      const response = await fetch("http://localhost:5001/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Parse the response JSON data
      const data = await response.json();

      // If registration is successful, log details and navigate to the login page
      if (response.ok) {
        console.log("Register successful:", data);
        navigate("/login");
      } else {
        // If registration fails, alert the user with an error message
        alert(`Error: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Register failed:", error.message);
    }
  };

  // Return JSX for the main App component with routing
  return (
    <div>
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home user={user} />} />

        {/* Route for the registration page with the handleRegister function as a prop */}
        <Route
          path="/register"
          element={<Register handleRegister={handleRegister} />}
        />

        {/* Route for the login page with the handleLogin function as a prop */}
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />

        {/* Route for the admin page */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

// Export the App component for use in other files
export default App;
