import React from 'react'

const Button = (props) => {
  return (
    <>
        <a cl assName={`btn ${props.class}`} href="">{props.text}</a>
    </>
  )
}

export default Button