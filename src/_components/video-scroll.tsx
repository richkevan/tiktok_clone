import { useEffect, useState } from "react";

import { getVideosFromPlaylist} from "../_utilities/axios";

const VideoDisplay = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideosFromPlaylist("PLFIcAa9ugiJK-_D_pOeuo5BukPWy2YLxA")
    .then((response) => setVideos(response.data.items))
  }, []);

  return (
    <>
    {videos.length > 0 && videos.map((video:{snippet:{ title:string, description: string, resourceId: {videoId: string}, thumbnails:{default:{url:string}}}}) => (
      <div className="flex flex-row gap-4">
        <div className="w-14">
          <div className="rounded-full w-14 h-14 overflow-clip">
          <img src={video.snippet.thumbnails.default.url} alt="Avatar"/>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="p-2">
          <p className="line-clamp-2 hover:line-clamp-none"><strong>
            {video.snippet.title}</strong>
            {video.snippet.description}</p>
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex-1">
              <iframe src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}?&autoplay=1&mute=1&controls=1&enablejsapi=1&fs=0&frameborder="0"`} allow="autoplay; encrypted-media" className=" aspect-[9/18] min-h-[480px] rounded-lg" />
              
            </div>
            <div className="flex flex-col w-1/5 justify-end">
              <p>Heart</p>
              <p>Comment</p>
              <p>Save</p>
              <p>Share</p>
            </div>
          </div>
        </div>
        <div className="w-1/6">
        <button className="border-2 border-[#fe2c55] px-1 py-[6px] rounded mt-5 text-[#fe2c55] w-full">Follow</button>
        </div>
      </div>
    ))}
    </>
  )
};

export default VideoDisplay;