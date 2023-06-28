import React, { useState } from 'react'
import Input from './Input'
import './styles/Experience.css'

export default function Experience() {
  const [ experience, setExperience ] = useState({
    "company": "company",
    "title": "title",
    "tasks": "tasks",
    "date": "date",
  })


  return (
    <div className="experience-info">
        <Input id="company" info={experience} setInfo={setExperience} placeholder="company" />
        <Input id="title" info={experience} setInfo={setExperience} placeholder="title" />
        <Input id="tasks" info={experience} setInfo={setExperience} placeholder="tasks" />
        <Input id="date" info={experience} setInfo={setExperience} placeholder="date" />
    </div>
  )
}
