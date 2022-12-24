import React from 'react'
import { useState } from 'react'
import './UseStateButton.css'

const UseStateButton = () => {
  const [count, setCount] = React.useState(0)
  const [show, setShow] = React.useState(true)

  return (
    <div className='usb'>

      {/* Main card to display the Count and buttons*/}
      <div className="usb-container"> 

        {/* Top card to show the Count - want to refactor this code to not have other divs*/}
        <div className="usb-container-top" >

          {/* Text "Counnt" */}
          <div className='usb-container-top-text'>
            <p>Count</p>
          </div>       

          {/* Number portion of the top card */}
          {show && <div className='usb-container-top-num'>
            <p>{count}</p>
          </div>}

        </div> 
        {/* Top card end */}

        {/* Middle card to shwo the controls */}
        <div className='usb-container-middle'>
         <p>The useState hook takes an initial state value as an argument and returns an array with two elements: the current state value, and a upate function.
        You can use the state variable + function in your component's JSX to render the component based on the state. Here the update function is called from any of the four buttons below.
         </p>
        </div>

        <div className='usb-container-end'>

          <div className='usb-container-end-top'>
            <button className='usb-container-end-top-p hov_click'onClick={() => setCount(count + 1)}>+1</button>
            <button className='usb-container-end-top-p hov_click'onClick={() => setCount(count - 1)}>-1</button>
            <button className='usb-container-end-top-p hov_click'onClick={() => setCount(0)}>=0</button>
          </div>

          <div className='usb-container-end-bottom'>
            <button className='hov_click' onClick={() => setShow(!show)}>Toggle the Count Display</button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default UseStateButton