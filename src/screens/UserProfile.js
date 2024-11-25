import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles for Toastify

function UserProfile() {
  // Initialize state with data from localStorage or default values
  const [userInfo, setUserInfo] = useState(() => {
    const savedUserInfo = localStorage.getItem("userInfo");
    return savedUserInfo
      ? JSON.parse(savedUserInfo)
      : {
          fullName: "Jane Doe",
          email: "jane.doe@example.com",
          address: "1234 Street Name, City, State",
          password: "password123", // Placeholder for password
          oldPassword: "", // Added old password field
          newPassword: "", // Added new password field
          id: null, // Default userId as null, will be overwritten by localStorage if available
        };
  });

  // Save updated user info to localStorage whenever it changes
  useEffect(() => {
    if (userInfo.id) {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
  }, [userInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleUpdatePassword = async () => {
    const { oldPassword, newPassword, id } = userInfo;

    if (!oldPassword || !newPassword) {
      toast.error("Both old and new passwords are required.");
      return;
    }

    // Get userId from localStorage or the current state
    const savedUserInfo = localStorage.getItem("userInfo");
    const userId = savedUserInfo ? JSON.parse(savedUserInfo).id : null;

    if (!userId) {
      toast.error("User ID is missing.");
      return;
    }

    // Making the API request
    try {
      const response = await fetch(
        `http://localhost:8080/user/password-reset/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            oldPassword: oldPassword,
            newPassword: newPassword,
          }),
        }
      );

      if (response.ok) {
        toast.success("Password updated successfully!");
        // Update the user password in the state after successful update
        setUserInfo({ ...userInfo, password: newPassword });
      } else {
        const error = await response.json();
        toast.error(error.message || "Failed to update password.");
      }
    } catch (error) {
      toast.error("An error occurred while updating the password.");
    }
  };

  const handleDeleteAccount = async () => {
    // Confirm before deleting the account
    if (window.confirm("Are you sure you want to delete your account?")) {
      // Get userId from userInfo state or from localStorage
      const userId = userInfo.id || (localStorage.getItem("userInfo") && JSON.parse(localStorage.getItem("userInfo")).id);

      if (!userId) {
        toast.error("User ID is missing.");
        return;
      }

      try {
        // API request to delete the account
        const response = await fetch(`http://localhost:8080/user/${userId}`, {
          method: "DELETE", // Assuming the DELETE method is used for deleting accounts
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          toast.success("Your account has been deleted successfully.");
          // Clear user data from localStorage
          localStorage.removeItem("userInfo");

          // Delay the redirect to allow the toast to show
          setTimeout(() => {
            window.location.href = "/registrationform"; // Modify this URL based on your login route
          }, 2000); // Wait for 2 seconds before redirecting
        } else {
          const error = await response.json();
          toast.error(error.message || "Failed to delete account.");
        }
      } catch (error) {
        toast.error("An error occurred while deleting the account.");
      }
    }
  };

  return (
    <div className="user-profile-container-custom">
      {/* Left Section: User Info */}
      <div className="user-profile-left-custom">
        <h1>{userInfo.fullName}</h1>
        <div className="user-contact-info-custom">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleInputChange}
              disabled
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={userInfo.address}
              onChange={handleInputChange}
              disabled
            />
          </div>
          <div className="form-group">
            <label>Old Password:</label>
            <input
              type="password"
              name="oldPassword"
              value={userInfo.oldPassword}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>New Password:</label>
            <input
              type="password"
              name="newPassword"
              value={userInfo.newPassword}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="action-buttons">
          <button
            className="view-profile-button-custom"
            onClick={handleUpdatePassword}
          >
            Update Password
          </button>
          <button
            className="view-profile-button-custom"
            onClick={handleDeleteAccount}
          >
            Delete Account
          </button>
          <button
            className="view-profile-button-custom"
            onClick={() => toast.info("View Full Profile clicked!")}
          >
            View Full Profile
          </button>
        </div>
      </div>

      {/* Right Section: Profile Image */}
      <div className="user-profile-right-custom">
        <div className="profile-image-container-custom">
          <img
            src="https://via.placeholder.com/200"
            alt="Profile"
            className="profile-image-custom"
          />
        </div>
      </div>

      {/* Toast Notifications Container */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </div>
  );
}

export default UserProfile;
