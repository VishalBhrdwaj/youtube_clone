import React from 'react'

const TopButton = (props) => {
  return (
    <div><button className='bg-slate-200 m-2 px-4 py-2 rounded-lg font-semibold'>{props.category}</button></div>
  )
}

export default TopButton