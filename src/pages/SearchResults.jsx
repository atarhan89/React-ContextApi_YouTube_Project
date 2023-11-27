import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getData } from "../helpers/getData";
import SideBar from "./../component/SideBar";
import Loading from "./../component/Loading";
import VideoCard from "./../component/VideoCard";
const SearchResults = () => {
  // path params > useParams ile cekeriz
  //query params > useSearchParams ile cekeriz
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState(null);
  //search query parametresının degerıne erısme
  const query = searchParams.get("search_query");

  useEffect(() => {
    getData(`/search?query=${query}`).then((res) => setResults(res.data.data));
  }, [query]);
  return (
    <div className="flex ">
      <SideBar />
      <div className="flex flex-col gap-5 px-4">
        <h2>{query} için sonuçlar...</h2>
        {!results ? (
          <Loading type={"video"} />
        ) : (
          results.map(
            (item) => item.type === "video" && <VideoCard type={"deneme"} video={item} />
          )
        )}
      </div>
    </div>
  );
};

export default SearchResults;
