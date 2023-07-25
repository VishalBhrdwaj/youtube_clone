import { useEffect } from "react";
import { GOOGLE_API_KEY, YOUTUBE_SINGLE_VIDEO_URL } from "../const";
import { useState } from "react";

export const useFetchVideoDetail =(videoId) => {

    const [videoInfo, setVideoInfo] = useState(null);

    
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        const data = await fetch(
          YOUTUBE_SINGLE_VIDEO_URL +
            videoId +
            "&key=" +
            GOOGLE_API_KEY
        );
        const json = await data.json();
        setVideoInfo(json);
    
    }
    console.log(videoInfo);
    
    return videoInfo;
  };