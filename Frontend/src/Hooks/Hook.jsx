import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Hooks = () => {
  return (
    <div>
      <h1>This is Hook</h1>

      <ol>
        <li><Link to="usestate">UseState</Link></li>
        <li><Link to="useeffect">UseEffect</Link></li>
        <li><Link to="useeffectapi">UseEffectApi</Link></li>
        <li><Link to="useref">UseRef</Link></li>
        <li><Link to="useReducer">UseReducer</Link></li>
      </ol>

      <Outlet />
    </div>
  );
};

export default Hooks;
