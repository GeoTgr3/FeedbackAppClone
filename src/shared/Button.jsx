import React from 'react'
import { useState } from 'react'

function Button({children, version , type , isDisabled}) {
    const [text, setText]=useState('Send that shit')
  return (
    <button   type={type} disabled={isDisabled} className={`btn btn-${version} `} >
    {text}
    </button>
  )
}

Button.defaultProps={
    version: 'primary',
    type: 'button',
    isDisabled: false
}
export default Button
