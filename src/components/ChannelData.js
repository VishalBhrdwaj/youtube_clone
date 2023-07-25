import React, { useEffect } from 'react'
import { useFetchChannelData } from './util/custom_Hooks/useFetchChannelData'
import { useSearchParams } from 'react-router-dom'

const ChannelData = () => {
    const [searchParams]=useSearchParams();
    const channelData  = useFetchChannelData(searchParams.get("channelId"));

    console.log(channelData.items);

  return  typeof channelData.items==='undefined'?"Loading":(
    <div className="flex pb-8 w-[28rem]">
    {/* Channel Info */}
    <div className="flex">
      {/* Channel DP */}
      <div className="h-16 w-16 bg-black rounded-full"></div>

      {/* Channel NAme and subscriber count */}
      <div className="ml-4 mt-2 mr-10">
        <div className="font-semibold text-lg">
          { (channelData?.items[0].snippet?.title)}
        </div>
        <div>{channelData.items[0].statistics.subscriberCount}</div>
      </div>

      {/* Subscribe button */}
      <button className="px-8 bg-red-500 rounded-full text-lg font-semibold">
        Subscribe
      </button>
    </div>
    </div>
  )
}

export default ChannelData