import React from 'react'
import { Link, Route, Routes, useLocation, useNavigate, useParams } from "react-router";

export default function About() {
    const {lang} = useParams()
  return (
    <div className='text-4xl'>About with language: {lang}</div>
  )
}
