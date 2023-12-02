import { RouterProvider } from "react-router-dom";
import { appRouter } from "./core/routes/app_router";
import RootProvider from "./core/providers/root_provider";

// import function to register Swiper custom elements
import { register as registerSwiper } from 'swiper/element/bundle';
// register Swiper custom elements
registerSwiper();

const App = () => {

  return (
    <>
      <RootProvider>
        <RouterProvider router={appRouter} />
      </RootProvider>
    </>
  );
};

export default App;
