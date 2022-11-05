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

      <div className="usb-container">
        <div className="usb-container-top" >
          <div className='usb-container-top-text'>
            <p>Count</p>
          </div>       
          <div className='usb-container-top-num'>
            <p>{count}</p>
          </div>
        </div>


        {/* <div className="usb-container-middle">
          <p>Some information about use state button</p>
        </div> */}

        {/* something for the middle and bottom */}
      </div>
    </div>
  )
}

export default UseStateButton