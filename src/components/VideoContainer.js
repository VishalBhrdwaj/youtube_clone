import React, { useEffect, useState } from 'react'
import { VIDEOS_URL } from './util/const';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos,setVideos]=useState([])
    const getVideos=async ()=>{
        const data=await fetch(VIDEOS_URL);
        const jsondata=await data.json()
        
        setVideos(jsondata.items);
    }
    useEffect(()=>{
        getVideos()
    },[])
  return (
    <div className='flex  flex-wrap'>

        {
            videos.map((videoInfo,index)=>{
                return <Link key={videoInfo.id} to={"/watch?v="+videoInfo.id+"&channelId="+videoInfo.snippet.channelId}><VideoCard  videoInfo={videoInfo}/></Link>
            })
        }
    </div>
  )
}

export default VideoContainer