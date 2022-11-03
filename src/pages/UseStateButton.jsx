import React from 'react'
import { useState } from 'react'

const UseStateButton = () => {
  const [count, setCount] = React.useState(0)
  const [show, setShow] = React.useState(true)

  return (
    <div>
      <h1>UseStatebutton {show &&<p>clicked {count} times</p>}</h1> 
      
      <p>Some informatin about use state button</p>
      <hr>
      </hr>

      <button onClick={() => setCount(count + 1)}>Click Me to Add</button>
      <button onClick={() => setCount(count - 1)}>Click Me to Sub</button>
      <button onClick={() => setCount(0)}>Click Me to Reset</button>
      <button onClick={() => setShow(!show)}>Click Me to Hide</button>
    </div>
  )
}

export default UseStateButton