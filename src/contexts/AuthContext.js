import { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [token, setToken] = useState('');
  return (
    <AuthContext.Provider value={{token}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;