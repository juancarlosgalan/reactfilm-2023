import { useContext } from "react";
import { AuthContext } from "../context/aut_context";

export const useAuth = () => {
    const { isLoggedIn, login, logout } = useContext(AuthContext);
    return {
        isLoggedIn,
        login,
        logout,
    };
};



//facilitarnos el uso del contexto
//Clase 24 - minuto 38 explica todo