// Import necessary React components and hooks
import React from "react";
import { useState, useEffect } from "react";

// Import styles for the Admin page
import "../styles/Admin.css";

// Functional component representing the admin panel
const Admin = () => {
  const [allUsers, setAllUsers] = useState();
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    handleViewAllUsers();
  }, []);

  const toggleUsers = () => {
    setToggle(!toggle);
  };

  const RenderAllUsers = () => {
    return (
      <div>
        <h2>All Users</h2>
        <ul>
          {allUsers.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div>
    );
  };

  // Function to handle handleViewAllUsers
  const handleViewAllUsers = async () => {
    try {
      // Make a GET request to the server to fetch all users
      const response = await fetch("http://localhost:5001/users/getAllUsers", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Parse the response JSON data
      const data = await response.json();

      // If the request is successful, set the list of users
      if (response.ok) {
        setAllUsers(data.users);
      } else {
        // Handle errors if the request fails
        console.error("Failed to fetch all users:", data.message);
      }
    } catch (error) {
      console.error("Failed to fetch all users:", error.message);
    }
  };

  // Return JSX for the admin panel
  return (
    <div className="background">
      <div className="admin-container">
        <h2>Admin Panel</h2>
        <button className="admin-button" onClick={toggleUsers}>
          View All Users
        </button>
        {toggle && allUsers && <RenderAllUsers />}
      </div>
    </div>
  );
};

// Export the Admin component for use in other files
export default Admin;
