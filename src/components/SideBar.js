import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updatedCategory } from './util/Redux_Slice/categorySlice';
import { useFetchCategoryVideos } from './util/custom_Hooks/useFetchCategoryVideos';
import { YOUTUBE_CATEGORY_VIDEO_API } from './util/const';
import store from './util/store';

const SideBar = () => {
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
    const dispatch=useDispatch();
    if(!isMenuOpen)return null

    const fetchData=async(contentType)=>{
        const data=await fetch(YOUTUBE_CATEGORY_VIDEO_API+contentType);
        const json=await data.json();
        dispatch(updatedCategory(json.items))
    }
   
    const getContentByType=(contentType)=>{
        fetchData(contentType)
    }
    
  return (
    <div className='p-3 pl-6 m-3 mt-20 fixed bg-white shadow-2xl w-48'>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <li>Shorts</li>
            <li>Video</li>
            <li>Live</li>
        </ul>
        <h1 className='font-bold mt-4'>Favourites</h1>
        <ul>
            <li className='cursor-pointer' onClick={()=>getContentByType("Arijit Singh Music")}>Arijit Sing Music</li>
            <li className='cursor-pointer' onClick={()=>getContentByType("The Kapil Sharma Show")}>Kapil Comedy</li>
            <li className='cursor-pointer' onClick={()=>getContentByType("Pubg Gaming")}>PUBG Gaming</li>
            <li className='cursor-pointer' onClick={()=>getContentByType("South Indian movies")}>South Movies</li>
        </ul>
        <h1 className='font-bold mt-4'> Subscription</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>

       
    </div>
  )
}

export default SideBar