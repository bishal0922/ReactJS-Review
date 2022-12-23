import React from 'react'
import { useState } from 'react'
import './UseStateButton.css'

const UseStateButton = () => {
  const [count, setCount] = React.useState(0)
  const [show, setShow] = React.useState(true)

  return (
    <div className='usb'>
      {/* <h1>UseStatebutton {show &&<p>clicked {count} times</p>}</h1> 
      
      <p>Some informatin about use state button</p>
      <hr>
      </hr>

      <button onClick={() => setCount(count + 1)}>Click Me to Add</button>
      <button onClick={() => setCount(count - 1)}>Click Me to Sub</button>
      <button onClick={() => setCount(0)}>Click Me to Reset</button>
      <button onClick={() => setShow(!show)}>Click Me to Hide</button> */}

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
          {/* need a +1 -1 =0  */}
          {/* Hide the count */}
          {/* two divs one for upper section and one for lower section
              upper section will be a div with 3 paragraphs 
          */}
          <div className='usb-container-end-top'>
            <button className='usb-container-end-top-p'onClick={() => setCount(count + 1)}>+1</button>
            <button className='usb-container-end-top-p'onClick={() => setCount(count - 1)}>-1</button>
            <button className='usb-container-end-top-p'onClick={() => setCount(0)}>=0</button>
          </div>

          <div className='usb-container-end-bottom'>
            <button onClick={() => setShow(!show)}>Toggle the Count Display</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default UseStateButton