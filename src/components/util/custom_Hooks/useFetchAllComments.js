import { useState, useEffect } from "react";
import { GOOGLE_API_KEY, YOUTUBE_ALL_COMMENTS_API } from "../const";

export const useFetchAllComments = (videoId) => {
  const [allComment, setAllComment] = useState(null);

  const fetchData = async () => {
    const data = await fetch(
      YOUTUBE_ALL_COMMENTS_API + videoId + "&key=" + GOOGLE_API_KEY
    );
    const json = await data.json();
    setAllComment(json);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return allComment;
};
