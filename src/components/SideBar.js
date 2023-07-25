import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
    if(!isMenuOpen)return null
  return (
    <div className='p-3 pl-6 m-3 mt-20 fixed bg-white shadow-2xl w-48'>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <li>Shorts</li>
            <li>Video</li>
            <li>Live</li>
        </ul>
        <h1 className='font-bold mt-4'> Subscription</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>

        <h1 className='font-bold mt-4'>Watch Later</h1>
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