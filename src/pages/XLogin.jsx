import React, { useState } from "react";

const XLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "user" && password === "password") {
      setError("");
      setIsLoggedIn(true);
    } else {
      setError("Invalid username or password");
      setIsLoggedIn(false);
    }
  };

  return (
    <div className="xlogin-container">
      <h1>Login Page</h1>
      {error && <p>{error}</p>}
      {isLoggedIn ? (
        <p>Welcome, user!</p>
      ) : (
        <form onSubmit={handleSubmit} className="xlogin-form">
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default XLogin;
