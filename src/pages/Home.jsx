// Import necessary React components and hooks
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Import styles for the Home page
import "../styles/Home.css";

// Functional component representing the Home page
export default function Home({ user }) {
  // Initialize the navigate function from React Router
  const navigate = useNavigate();

  // useEffect hook to redirect to the registration page if user is not logged in
  useEffect(() => {
    // Check if user or user.username is not available, then redirect to the registration page
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // Return a welcome message if the user is logged in, otherwise return null
  return user ? (
    <div className="home-container">
      You are logged in as{" "}
      <span className="username-text">{user.username}</span>.
    </div>
  ) : null;
}
