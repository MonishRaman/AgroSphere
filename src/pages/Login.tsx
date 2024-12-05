import React from 'react';
import { LoginForm } from '../components/LoginForm';
import { PageBackground } from '../components/PageBackground';
import { backgrounds } from '../utils/backgroundImages';

export const Login: React.FC = () => {
  return (
    <PageBackground image={backgrounds.login}>
      <LoginForm />
    </PageBackground>
  );
};