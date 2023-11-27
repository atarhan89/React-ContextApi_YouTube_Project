import { useContext } from "react";
import SideBar from "../component/SideBar";
import { YoutubeContext } from "../context/youtubeContext";
import Loading from "./../component/Loading";
import VideoCard from "../component/VideoCard";
const Feed = () => {
  const { videos } = useContext(YoutubeContext);

  return (
    <div className="flex gap-3">
      <SideBar />
      <div className="videos">
        {!videos ? (
          <Loading type={"video"} />
        ) : (
          videos.map(
            (item) =>
              item.type === "video" && <VideoCard video={item} key={videos.videoId} />
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
