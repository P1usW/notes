import React, {useState} from 'react';
import { createUser } from '@src/firebase/firebase';
import AuthForm from '@src/components/Form/AuthForm';

const Register = () => {
  function handleSubmit(event: React.SyntheticEvent, email: string, password: string) {
    event.preventDefault();
    createUser(email, password).catch(() => console.log('error'));
  }

  return (
    <AuthForm 
      title='Регистрация'
      handleSubmit={handleSubmit}/>
  );
};

export default Register;