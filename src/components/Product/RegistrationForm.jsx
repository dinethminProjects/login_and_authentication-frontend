import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Import useNavigate

const RegistrationForm = () => {
  const navigate = useNavigate();  // Initialize navigate

  // State to manage form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  });

  // State to handle form submission, success message, and error messages
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous errors
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // Prepare the data object for the API
      const data = {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        address: formData.address,
      };

      // Make API request to register the user
      const response = await axios.post("http://localhost:8080/user/sign-up", data);
      if (response.status === 200 || response.status === 201) {
        setIsSubmitted(true);
        console.log("User registered successfully:", response.data);

        // Clear the form after successful submission
        setFormData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
          address: "",
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);

        // Redirect to login page after 1 second
        setTimeout(() => {
          navigate("/login"); // Redirect to the login page
        }, 1000);
      }
    } catch (error) {
      console.error("Error registering user:", error);

      // Check if the error has a response (server-side error)
      if (error.response) {
        // If the server sends an error response
        setErrorMessage(error.response?.data?.message || "An error occurred. Please try again.");
      } else if (error.request) {
        // If no response is received from the server
        setErrorMessage("No response received from server. Please try again.");
      } else {
        // If there was an error setting up the request
        setErrorMessage("An error occurred. Please try again.");
      }

      // Hide error message after 5 seconds
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <section className="register-section">
      <div className="register-container">
        <h2>REGISTER</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className="register-button">
            Register
          </button>

          {isSubmitted && <p className="success-message">Registration successful!</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <p>
            Already have an account? <a href="/login">Login here</a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
