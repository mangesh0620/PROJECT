
import { Component } from "react"

export function Login(){

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    // For simplicity, let's consider a basic check
    if (username === 'example' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

    
    return(
      <div className="App">
      {isLoggedIn ? (
        <h1>Welcome, {username}!</h1>
      ) : (
        <form className="login-form">
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      )}
    </div>
  );
}
        
        
  