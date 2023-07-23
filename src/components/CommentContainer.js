import { wait } from '@testing-library/user-event/dist/utils'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { GOOGLE_API_KEY, YOUTUBE_ALL_COMMENTS_API } from './util/const';
import Comments from './Comments';

const CommentContainer = () => {
    const [searchParams]=useSearchParams();
    const [comments,setComments]=useState(null);

    const fetchAllComments=async()=>{
        const commentData=await fetch(YOUTUBE_ALL_COMMENTS_API+searchParams.get("v")+"&key="+GOOGLE_API_KEY)
        const json=await commentData.json();
        console.log(json);
        setComments(json);
    }
    useEffect(()=>{

        fetchAllComments();
    },[])
  return comments==null ? "Loading":(
    <div>

    <div className='text-lg font-bold'>Comments</div>
        {
            comments.items.map((comment,index)=>{
                return <Comments key={index} comment={comment.snippet.topLevelComment.snippet}/> 
            })
        }
    </div>
  )
}

export default CommentContainer