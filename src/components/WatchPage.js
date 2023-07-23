import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./util/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col">
    <div className="ml-7 mt-2">
      <iframe
        width="900"
        height="515"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
    <div className="ml-7 mt-5">
        <CommentContainer/>
    </div>
    </div>
  );
};

export default WatchPage;
