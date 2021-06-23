import React from 'react'

export const Button = () => {
  const [value, setValue] = React.useState(0)

  const increment = () => {
    setValue(value + 1)
  }

  return (
    <button onClick={increment}>{value}</button>
  )
}