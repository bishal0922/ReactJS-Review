import React, { useRef } from 'react'
import { useState } from 'react'


const UseStateText = () => {
  const [text, setText] = React.useState('*Insert Name*')
  
  const inputval = useRef(null)

  return (
    <div>
      <h1>UseStateText</h1>
      <p>Hey {text} thanks for being with us today</p>

      <input type="text" placeholder='some' value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClilck={() => setText('asdfas')} >Click to reset</button>

    </div>
  
  )
}

export default UseStateText