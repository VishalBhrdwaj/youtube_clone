import React from 'react'

const VideoCard = (props) => {
    const {videoInfo}=props;
    const {snippet,statistics}=videoInfo
    const {title,channelId,channelTitle,thumbnails}=snippet

  return (
    <div className='w-64 m-5 shadow-lg p-3'>
        <div className=''>
            <img alt="banner-img" className='rounded-lg object-fill' 
            src={thumbnails.medium.url} />
        </div>
        <div>
            <ul className='flex flex-col'>
                <li className="mb-2 text-lg font-semibold">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount}</li>

            </ul>
        </div>
        
    </div>
  )
}

export default VideoCard