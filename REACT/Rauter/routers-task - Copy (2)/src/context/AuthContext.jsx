import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

import React from "react";

const AuthProvider = ({ children }) => {
   const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

  const [IsAuth , SetIsAuth] = useState(false)

  return (
    <div>
      <AuthContext.Provider
        value={{
          IsAuth,
          SetIsAuth,
          email,
          setEmail,
          password,
          setPassword,
          rememberMe,
          setRememberMe,
        }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

export const Auth = () => useContext(AuthContext);
