import React from 'react'
import '../sass/dropDown.scss'

const DropDown = ({visable,obj}) => {
  return (visable ? (
    <div className="dropDownContainer">
        <ul className='dropDownList'>
        {Array.isArray(obj) ? obj.map((i,index)=>(<li key={`${i}-${index}`} >{i}</li>))
        :Object.keys(obj).map((i,index)=> (<li key={`${i}-${index}`}><img src={obj[i]} alt={i} />{i}</li>)) }
        </ul>
    </div>
  ) : null)
}

export default DropDown