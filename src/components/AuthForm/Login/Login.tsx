import React, {useState} from 'react';
import { signInUser } from '@src/firebase/firebase';
import AuthForm from '@src/components/Form/AuthForm';
import { useDispatch } from 'react-redux';
import { setUser } from '@src/store/user/userActions';
import { useNavigate } from 'react-router';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(event: React.SyntheticEvent, email: string, password: string) {
    event.preventDefault();
    await signInUser(email, password)
      .then(({user}) => {
        console.log(user);
    
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          token: user.accessToken
        }));
        navigate('/');
      })
      .catch(() => console.log('error'));
  }

  return (
    <AuthForm
      title='Аунтентификация'
      handleSubmit={handleSubmit}/>
  );
};

export default Login;
