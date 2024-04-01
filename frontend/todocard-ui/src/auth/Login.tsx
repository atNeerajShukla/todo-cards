import { IconButton, InputAdornment, TextField } from "@mui/material";
import { FormEvent, useState } from "react";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from "axios";

const Login = () => {

  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
  });

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const loginFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('YOUR_REGISTER_API_ENDPOINT', loginData);
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const registerFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('YOUR_REGISTER_API_ENDPOINT', registerData);
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const [showPassword, setShowPassword] = useState<Boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword: Boolean) => !prevShowPassword);
  };

  return (
    <div className="bg-gray-50 grow">
      <div className="flex flex-col md:flex-row gap-5 p-5 justify-around items-center">
        <form onSubmit={loginFormSubmit} className="vstack md:w-1/3">
          <h1 className="text-2xl font-semibold text-gray-700">Login Here</h1>
          <p className="text-gray-700 mb-3">Welcome back! Log in to continue where you left off!</p>
          <TextField required label="Username" variant="outlined" name="username" />
          <TextField required label="Password" variant="outlined" name="password"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" className="me-3">
                  <IconButton
                    onClick={togglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <button type="submit" className="btn text-violet-600 hover:text-white border-violet-600 hover:bg-violet-800">Login</button>
        </form>
        <form onSubmit={registerFormSubmit} className="vstack md:w-1/3">
          <h1 className="text-2xl font-semibold text-gray-700">Register Here</h1>
          <p className="text-gray-700 mb-3">Create an account to start managing your tasks and take control of your todos!</p>
          <TextField required label="Full Name" variant="outlined" name="name" placeholder="Enter Full Name" />
          <TextField required label="Username" variant="outlined" name="username" />
          <TextField required label="Email" variant="outlined" type="email" name="email" />
          <TextField required label="Password" variant="outlined" name="password" type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" className="me-3">
                  <IconButton
                    onClick={togglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }} />
          <button type="submit" className="btn text-violet-600 hover:text-white border-violet-600 hover:bg-violet-800">Register</button>
        </form>
      </div>
    </div>

  );
};

export default Login;