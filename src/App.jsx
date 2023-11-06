
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./core/routes/app-router";

const App = () => {
  return (
   <>
   <RouterProvider
      router={appRouter} />
   </>
  );
};

export default App;