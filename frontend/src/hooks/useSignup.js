import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (firstName, lastName, email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      'http://grupo2backend-env.eba-ssmahfch.us-east-2.elasticbeanstalk.com/users/signup',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password, city: { id: 1 }, role: { id: 1 } }),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError("Lamentablemente no ha podido registrarse. Por favor intente más tarde");
    }

    if (response.ok) {
      // save the user to session storage
      sessionStorage.setItem('user', JSON.stringify(json));
      // update the auth context
      dispatch({ type: 'LOGIN', payload: { firstName, lastName } });
      // update loading state
      setIsLoading(false);
    }
  };

  return { signup, error, isLoading };
};
