/*
A login form with username, email, and password fields and conditionally rendered Submit button. Add or remove any form fields, and update initialFormValues accordingly.
*/

import { useState } from 'react';

const initialFormValues = {
  username: '',
  email: '',
  password: ''
};

const LoginForm = () => {
  const [formValues, updateFormValues] = useState(initialFormValues);
  const { username, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    updateFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          value={username}
          onChange={handleChange}
          name="username"
          placeholder="Enter your username"
        />
      </div>
      <div>
        <input
          value={email}
          onChange={handleChange}
          name="email"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <input
          value={password}
          onChange={handleChange}
          name="password"
          placeholder="Enter your password"
        />
      </div>
      {username && email && password && <button type="submit">Submit</button>}
    </form>
  );
};

export default LoginForm;
