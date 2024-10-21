
import { useFetchData } from "../../../providers/IMBFetch";
import Loader from "../../Loader/Loader";
import PreviewTitles from "../../PlatformParts/PreviewMovie/PreviewTitles";


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
    <PreviewTitles/>
  );
};

export default Main;