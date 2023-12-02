import AppCarouselSection from "../../../core/components/app_carousel_section/app_carousel_section";
import { AppSwiper } from "../../../core/components/app_swiper/app_swiper";
import AppSwiperSlide from "../../../core/components/app_swiper/components/app_swiper_slide";
import { getPopularMovies, getUpcomingMovies } from "../services/movies.services";
import { getTopRatedMovies } from "../services/movies.services";

import useSWR from "swr";

import AppCard from "../../../core/components/app_card/provider/app_card";


const HomeView = () => {
  const { 
     data: popularMovies,
     error: popularMoviesError, 
     isLoading: popularMoviesIsLoading,
    } = useSWR('getPopularMovies', getPopularMovies);

    const { 
      data: topRatedMovies,
      error: topRatedMoviesError, 
      isLoading: topRatedMoviesIsLoading,
     } = useSWR('getTopRatedMovies', getTopRatedMovies);

     const { 
      data: upcomingMovies,
      error: upComingMoviesError,
      isLoading: upcomingMoviesIsLoading,
     } = useSWR('getUpComingMovies', getUpcomingMovies);


  return (
    <div>
      <AppCarouselSection title={"Popular Movies"} data={popularMovies}/>
      <AppCarouselSection title={"Top Rated Movies"} data={topRatedMovies}/>
      <AppCarouselSection title={"Up Coming Movies"} data={upcomingMovies}/>
  
    </div>
  );
};
  
export default HomeView;

//compartir datos entre muchos componentes = Context