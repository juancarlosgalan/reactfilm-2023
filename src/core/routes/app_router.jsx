import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../features/home/views/home_view";
import LoginView from "../../features/login/views/login_view";
import PrivateRoute from "../../features/auth/components/private_route";
import PublicRoute from "../../features/auth/components/public_route";

export const appRouter = createBrowserRouter([
    {
    path: "/",
    element: (
      <PrivateRoute>
        <HomeView />
    </PrivateRoute>
    ),
    },
    {
    path: "/login",
    element: (
        <PublicRoute>
            <LoginView />
        </PublicRoute>
    ),
    },
]);

//la api nativa del navegador
//usa el enroutador del browser/navegador
//si da problemas cambiar por createHashRouter (otro tipo de enrutador)

//404
/*
{
path: "*",
element: 
<div>No se encontro la pagina</div>,
},*/
