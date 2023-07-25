import React, { useEffect, useState } from 'react'
import { VIDEOS_URL } from './util/const';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import store from './util/store';
import { updatedCategory } from './util/Redux_Slice/categorySlice';

const VideoContainer = () => {
    const [videos,setVideos]=useState([])
    const dispatch=useDispatch();

    const content=useSelector(store=>store.category.content);

    
    const getVideos=async ()=>{
        const data=await fetch(VIDEOS_URL);
        const jsondata=await data.json()
        
        setVideos(jsondata.items);
        dispatch(updatedCategory(jsondata.items));

    }
    useEffect(()=>{
        getVideos()
    },[])
  return (
    <div className='flex  flex-wrap'>

        {/* {console.log(data)} */}

{  content==="Loading"? "Loading":


(<>
        {
            content.map((videoInfo,index)=>{
                return <Link key={videoInfo.id} to={"/watch?v="+(typeof(videoInfo.id)==='object'?videoInfo.id.videoId:videoInfo.id)+"&channelId="+videoInfo.snippet.channelId}><VideoCard  videoInfo={videoInfo}/></Link>
            })
        }</>)
    }
    </div>
  )
}

export default VideoContainer