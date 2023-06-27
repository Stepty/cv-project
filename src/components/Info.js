import React, { useState } from 'react'
import Input from './Input';
import './styles/Info.css'

// General information name, email, phone number, links/website
export default function Info() {
    const [info, setInfo] = useState
    ({
        "name": "name", 
        "email": "email",
        "phone": "phone",
        "links": "links"
    })

  return (
    <div className="general-info">
        <Input id="name" info={info} setInfo={setInfo} placeholder="name" />
        <Input id="phone" info={info} setInfo={setInfo} placeholder="phone" />
        <Input id="email" info={info} setInfo={setInfo} placeholder="email" />
        <Input id="links" info={info} setInfo={setInfo} placeholder="links" />
    </div>
  )
}
