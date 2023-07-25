import React from 'react'

const Comments = ({comment}) => {
 const {authorDisplayName, textOriginal }=comment;
  return (
    <div className='mt-10 flex w-3/4 flex-wrap'>
    <div className=''> <img
      className="h-10 mr-4"
      alt="user"
      src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
    /></div>
    <div>
    <div className='font-semibold text-lg'>{authorDisplayName}</div>
    <div className='line-clamp-1'>{textOriginal}</div>
    </div>
</div>
  )
}

export default Comments