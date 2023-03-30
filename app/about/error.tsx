"use client"

import React from 'react'

const Error = ({error,reset}) => {
  return (
    <div>
        This isnt loading up {error.message}
        <button onClick={() => reset()}>Retry</button>
    </div>
  )
}

export default Error