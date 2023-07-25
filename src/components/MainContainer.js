import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useFetchCategoryVideos } from './util/custom_Hooks/useFetchCategoryVideos'

const MainContainer = () => {
  return (
    <div className='w-10/12 ml-56 h-auto'>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer