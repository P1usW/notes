import {createContext, useState} from "react";
import User from "@src/interface/user";


interface AuthContext {
  user: User | null,
  signIn: (newUser: User, callback: () => void) => void,
  signOut: (callback: () => void) => void
}


export const AuthContext = createContext<AuthContext>({} as AuthContext);

interface AuthProviderProps {
  children?: React.ReactNode,
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  function signIn(newUser: User, callback: () => void) {
    setUser(user);
    callback();
  }
  
  function signOut(callback: () => void) {
    callback();
  }

  const context = {
    user,
    signIn,
    signOut
  }
  
  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider