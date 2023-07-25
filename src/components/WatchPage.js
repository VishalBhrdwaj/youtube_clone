import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./util/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import SuggestVideos from "./SuggestVideos";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId=searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex mt-16 flex-col">
    <div className="ml-7 mt-2 flex">
      <iframe 
      className="rounded-xl"
        width="900"
        height="515"
        src={"https://www.youtube.com/embed/" +videoId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      {/* <SuggestVideos/> */}
    </div>
    <div className="ml-7 mt-5">
        <CommentContainer/>
    </div>
    </div>
  );
};

export default WatchPage;
