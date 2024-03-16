import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { User } from "../interfaces/user";
import { client } from "../network/api";

interface AuthCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user?: User | null;
  signIn(credentials: AuthCredentials): void;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      return null;
    }

    const userJson = JSON.parse(user);
    return userJson;
  });

  async function signIn({ email, password }: AuthCredentials) {
    const { data } = await client.get<User[]>(`users?email=${email}`);

    if (data.length === 0 || data[0].password !== password) {
      throw new Error("Usuário e/ou senha inválido(s)");
    }

    localStorage.setItem("user", JSON.stringify(data[0]));

    setUser(data[0]);
  }

  function signOut() {
    localStorage.removeItem("user");
    setUser(null);
  }

  const providerData = useMemo(
    () => ({
      user: user,
      signIn,
      signOut,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={providerData}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) throw new Error("erro no usAuth");
  return context;
}
