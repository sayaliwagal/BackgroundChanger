import React from 'react'



const Button = ({onClick, colorList}) => {
    // console.log(props)
    // const {colorList} = props;
    const {name, btnColor} = colorList;
    // console.log(props.name);
  
  return (
    <button 
    onClick={onClick}
        className='btn' 
        style={{backgroundColor:btnColor}}>
          {name}
    </button>
  )
}

export default Button
