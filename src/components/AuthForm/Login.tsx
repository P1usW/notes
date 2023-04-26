import React, {useState} from 'react';

const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function handleInput(event: React.ChangeEvent<HTMLInputElement>, dispatch: React.Dispatch<string>) {
    dispatch(event.target.value);
  }

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    console.log('hello')
  }

  return (
    <form
      onSubmit={handleSubmit}>
      <input
        type='text'
        onChange={(event) => handleInput(event, setUserName)}
        value={username}/>
      <input
        type='password'
        onChange={(event) => handleInput(event, setPassword)}
        value={password}/>
    </form>
  );
};

export default Login;
