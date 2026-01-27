import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Hooks = () => {
  return (
    <div>
      <h1>This is hook</h1>
      <ol>
        <li><Link to='/UseState'>UseState</Link></li>
        <li><Link to='/UseEffect'>UseEffect</Link></li>
        <li><Link to='/UseEffectApi'>UseEffectApi</Link></li>
        <li><Link to='useRef'>useRef</Link></li>
      </ol>
      <Outlet/>
    </div>
  )
}

export default Hooks
