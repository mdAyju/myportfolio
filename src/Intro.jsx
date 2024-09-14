import React from 'react'
import pic from './assets/pic.png'
import './Intro.css'

const Intro = () => {
  return (
    <section>
      <div className="introcontent">
        <span className="hello">Hello</span>
        <span className="introname">I'm <span className="name">Ayjas</span><br /> <span className="role">Frontend Developer</span></span>
        <p>im fullstack Developer</p>
      </div>
      <img className="introimg" src={pic} alt="" />
    </section>
  )
}

export default Intro