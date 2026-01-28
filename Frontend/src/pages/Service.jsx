import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import AuthContext from '../Context/AuthContext';

const Service = () => {
  const theme=useContext(ThemeContext);
  const user=useContext(AuthContext);

  return (
    <div>
      <h1>{theme}</h1>
      <p>Id:{user.id}</p>
      <p>Name:{user.name}</p>
      <p>Email:{user.email}</p>
  
    </div>
  )
}

export default Service