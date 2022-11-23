import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      'http://grupo2backend-env.eba-ssmahfch.us-east-2.elasticbeanstalk.com/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ username, password }),
      }
    );

    const json = await response.json();


    if (!response.ok) {
      setIsLoading(false);
      setError("Lamentablemente no ha podido iniciar sesión. Por favor intente más tarde");
    }

    if (response.ok) {
      // save the user to session storage
      sessionStorage.setItem('user', JSON.stringify(json));
      // update the auth context
      dispatch({ type: 'LOGIN', payload: json });
      // update loading state
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
