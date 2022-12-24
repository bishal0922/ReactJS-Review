import React, { useRef } from 'react'
import { useState } from 'react'


const UseStateText = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    submitting: false,
  });
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormState({ ...formState, submitting: true });
    // send email and password to backend
    // handle response
    setFormState({ email: '', password: '', submitting: false });
  };

  return (
    <div>
     <form onSubmit={handleSubmit}>
       <label htmlFor="email">Email:</label>
         <input type="email" id="email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })}/>
       <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={formState.password} onChange={(e) => setFormState({ ...formState, password: e.target.value })}/>
    
       <button type="submit" disabled={formState.submitting}>
          Log in
       </button>

  </form> 
  </div>
  )
}

export default UseStateText