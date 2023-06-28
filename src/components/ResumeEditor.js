import React from 'react'
import Info from './Info'
import './styles/ResumeEditor.css'
import Education from './Education'
import Experience from './Experience'

export default function ResumeEditor() {

  return (
    <div id="body">
        <Info />
        <Education />
        <Experience /> 
    </div>
  )
}
