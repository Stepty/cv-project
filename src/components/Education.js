import React, { useState } from 'react'
import Input from './Input'
import './styles/Education.css'

export default function Education() {
  const [ education, setEducation ] = useState({
    "school": "school",
    "title": "title",
    "date": "date",
  })


  return (
    <div className="education-info">
        <Input id="school" info={education} setInfo={setEducation} placeholder="school" />
        <Input id="title" info={education} setInfo={setEducation} placeholder="title" />
        <Input id="date" info={education} setInfo={setEducation} placeholder="date" />
    </div>
  )
}
