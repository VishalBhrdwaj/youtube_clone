import React from 'react'
import TopButton from './TopButton'

const ButtonList = () => {


    const topButton=["All","Stocks","Music","Mixes","Live","Apple","Laptops","TollyWood"] 
  return (
    <div className='flex'>
        {
            topButton.map((singletopbutton,index)=>{
                return <TopButton  key={index} category={singletopbutton}/>
            })
        }
    </div>
  )
}

export default ButtonList