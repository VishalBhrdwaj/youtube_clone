import { useEffect, useState } from "react"
import { YOUTUBE_CATEGORY_VIDEO_API } from "../const";



export const useFetchCategoryVideos=(categoryType)=>{

categoryType="Arijit singh"
const [videoData,setVideoData]=useState();

const fetchData=async()=>{
    const data=await fetch(YOUTUBE_CATEGORY_VIDEO_API+categoryType);
    const json=await data.json();
    console.log(json);
    setVideoData(json);
}

useEffect(()=>{
 fetchData();
},[])

    // return  videoData;
}