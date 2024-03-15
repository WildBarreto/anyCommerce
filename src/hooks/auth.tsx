import { ReactNode, createContext, useContext, useState } from "react";
import { User } from "../interfaces/user";
import { client } from "../network/api";

interface AuthCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: AuthCredentials): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<User>({} as User);

  async function signIn({ email, password }: AuthCredentials) {
    const { data } = await client.get<User[]>(`users?email=${email}`);

    if (data.length === 0 || data[0].password !== password) {
      throw new Error("Usuário e/ou senha inválido(s)");
    }
    setUserData(data[0]);
  }
  return (
    <AuthContext.Provider
      value={{
        user: userData,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) throw new Error("erro no usAuth");
  return context;
}
