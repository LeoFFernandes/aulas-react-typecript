import { useContext } from "react"
import { UserLoggedContext } from "../contexts";


export const useUserLogged = () => {
    const context = useContext(UserLoggedContext);
    return context;
} 