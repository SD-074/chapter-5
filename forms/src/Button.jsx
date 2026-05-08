import React from 'react'
import { useFormStatus } from 'react-dom'

export default function Button() {
    const nnn = useFormStatus()
  return (

    <div>{nnn.pending ? "Button ture": "Button false"}</div>
  )
}
