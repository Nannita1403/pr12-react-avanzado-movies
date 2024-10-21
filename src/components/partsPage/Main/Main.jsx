
import { useFetchData } from "../../../providers/IMBFetch";
import Loader from "../../Loader/Loader";
import PreviewTitles from "../../PlatformParts/MovieCard/PreviewTitles";
import PreviewMovie from "../../PlatformParts/PreviewMovie/PreviewMovie";


const Main = () => {
  const { titles } = useFetchData()
  
  const handleMovieSearch = (inputValue) => {
    setFilter(inputValue)
  }
console.log(titles);
  if (!titles) {
    return <Loader/>
  }
  return (
    <>
    <PreviewMovie/>
    {/* <PreviewTitles/> */}
    </>
  );
};

export default Main;