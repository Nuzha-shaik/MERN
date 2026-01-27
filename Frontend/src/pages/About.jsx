import React from 'react'

function About(props) {
  return (
    <div>
    <h1>{props.message}</h1>
    <h1>{props.re}</h1>
    <h1>{props.email}</h1>
    </div>
  )
}

export default About
