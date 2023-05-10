import { createContext, ReactNode, useContext, useState } from "react";
import { UsersResponse } from "@/types";

const useUser = () => {
  const { user, setUser } = useContext(UserContext);

  return {
    user,
    setUser,
  };
};

const UserContext = createContext({
    user: undefined as UsersResponse | undefined,
    setUser: (_user: UsersResponse) => {}
});
const UserProvider = ({ children }: {children: ReactNode}) => {
    const [user, setUser] = useState<UsersResponse | undefined>(undefined)

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider, useUser}