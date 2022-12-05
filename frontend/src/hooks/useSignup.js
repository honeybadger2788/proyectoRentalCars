export const useSignup = () => {

  const signup = (firstName, lastName, email, password) => {

    const signupResponse = fetch(
      'http://grupo2backend-env.eba-ssmahfch.us-east-2.elasticbeanstalk.com/users/signup',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password, city: { id: 4 }, role: { id: 1 } }),
      }
    ).then(response => {
      console.log(response)
      if (response.status !== 201) {
        throw new Error("Lamentablemente no ha podido registrarse. Por favor intente más tarde")
      } else {
        return response.json()
      }
    })
      .then(result => {
        return {
          result,
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
    return signupResponse
  }
  return { signup };
};
