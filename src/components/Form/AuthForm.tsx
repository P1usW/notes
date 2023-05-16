import React, { useState } from 'react';


interface AuthFormProps {
  title: string,
  handleSubmit: (event: React.FormEvent<HTMLFormElement>, email: string, password: string) => void
}

const AuthForm = ({title, handleSubmit}: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleInput(event: React.ChangeEvent<HTMLInputElement>, dispatch: React.Dispatch<string>) {
    dispatch(event.target.value);
  }

  return (
    <form
      onSubmit={(event) => handleSubmit(event, email, password)}>
      <h2>{title}</h2>
      <input
        type='email'
        onChange={(event) => handleInput(event, setEmail)}
        value={email}/>
      <input
        type='password'
        onChange={(event) => handleInput(event, setPassword)}
        value={password}/>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default AuthForm;