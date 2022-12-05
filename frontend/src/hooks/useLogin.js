import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const { dispatch } = useAuthContext();

  const login = (username, password) => {
    const loginResponse = fetch(
      'http://grupo2backend-env.eba-ssmahfch.us-east-2.elasticbeanstalk.com/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ username, password }),
      }
    )
      .then(response => {
        console.log(response)
        if (response.status !== 200) {
          throw new Error  ("Lamentablemente no ha podido iniciar sesión. Por favor intente más tarde")
        } else {
          return response.json()
        }
      })
      .then(result => {
        const json = result
        // save the user to session storage
        sessionStorage.setItem('user', JSON.stringify(json));
        // update the auth context
        dispatch({ type: 'LOGIN', payload: json });
        return {
          error: false,
          isLoading: true,
        }
      })
      .catch(e => {
        return {
          error: e.message,
          isLoading: false
        }
      })
    return loginResponse
  };
  return { login };
};
