import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../features/home/views/home_view";
import LoginView from "../../features/login/views/login_view";

export const appRouter = createBrowserRouter
([{
    path: "/",
    Component: HomeView,
},
{
    path: "/login",
    Component: LoginView,
},
]);

//la api nativa del navegador
//usa el enroutador del browser/navegador
//si da problemas cambiar por createHashRouter (otro tipo de enrutador)


