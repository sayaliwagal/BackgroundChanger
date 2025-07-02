import React, { useState } from 'react'
import Button from './componant/Button';
// import { colorObj } from './constant';
import './App.css'
import { colorObj } from './constant';

const App = () => {
  const [bgColor, setBgColor] = useState('#FFFFFF');
  // const chnageColor =(colorHex) => {
  //     setBgColor(colorHex);
  // }
  return (
  <>
    {/* <div className="btnGroup">
        <Button colorList={colorObj[0]}/>
        <Button colorList={colorObj[1]}/>
        <Button colorList={colorObj[2]}/>
    </div>
    <div className="btnGroup">
        <Button colorList={colorObj[3]}/>
        <Button colorList={colorObj[4]}/>
        <Button colorList={colorObj[5]}/>
    </div>
    <div className="btnGroup">
        <Button colorList={colorObj[6]}/>
        <Button colorList={colorObj[7]}/>
        <Button colorList={colorObj[8]}/>
    </div>  */}
    <div className="main" style={{backgroundColor:bgColor}}>

      <div className="btnGroup">

        {
          colorObj.map((item, index) =>  (
              // console.log(item.btnColor)
              <Button 
              onClick={() => setBgColor(item.btnColor)} 
              colorList = {item} 
              key= {item.id}
              />
              
            )
          )
        }
      </div>

    </div>
  </> 
  )
}

export default App
