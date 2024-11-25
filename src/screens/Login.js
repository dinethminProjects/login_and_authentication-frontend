import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  // State to handle form submission, success, and error messages
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate(); // Initialize navigate

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
    setErrorMessage(""); // Clear any previous errors

    try {
      // Prepare the data object for the API
      const data = {
        email: formData.email,
        password: formData.password,
      };

      // Make API request to login the user
      const response = await axios.post("http://localhost:8080/user/sign-in", data);

      if (response.status === 200 || response.status === 201) {
        setIsSubmitted(true);
        console.log("Login successful:", response.data);

        // Assuming the response contains the user information (UserInfoDto)
        const userInfo = response.data; // This should be your UserInfoDto object from the backend

        // Save UserInfoDto to localStorage
        localStorage.setItem("userInfo", JSON.stringify(userInfo));

        // Navigate to /home after successful login
        setTimeout(() => {
          navigate("/"); // Redirect to home page
        }, 500); // Redirect after a short delay (500ms)
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMessage(error.response?.data?.message || "An error occurred. Please try again.");

      // Clear error message after 3 seconds
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <section className="register-section">
      <div className="register-container">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
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

          <button type="submit" className="register-button">
            Login
          </button>

          {isSubmitted && <p className="success-message">Login successful!</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <p>
            Don't have an account? <a href="/registrationform">Sign Up here</a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
