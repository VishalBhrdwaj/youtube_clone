import React from 'react'
import TopButton from './TopButton'

const ButtonList = () => {


    const topButton=["All","Stocks","Music","Mixes","Live","Apple","Laptops","TollyWood"] 
  return (
    <div className='flex mt-16 border-2 border-black  bg-white w-full'>
        {
            topButton.map((singletopbutton,index)=>{
                return <TopButton  key={index} category={singletopbutton}/>
            })
        }
    </div>
  )
}

export default ButtonList