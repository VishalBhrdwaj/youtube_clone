import { useEffect, useState } from "react";
import { GOOGLE_API_KEY, YOUTUBE_CHANNEL_DATA_API } from "../const";


export const useFetchChannelData=(channelId)=>{
    
    const [channelData,setChannelData]=useState([]);

    const fetchData=async()=>{

        const data=await fetch(
            YOUTUBE_CHANNEL_DATA_API+
            channelId+
            "&key="+
            GOOGLE_API_KEY
        );
        const json=await data.json();
        setChannelData(json);
    }
    useEffect(()=>{
        fetchData();
    },[])
    return channelData;
}
