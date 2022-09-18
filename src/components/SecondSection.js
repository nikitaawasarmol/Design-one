import React from 'react'
import second from './second.module.css'

function SecondSection() {
  return (
    <>
    <section>
    <div className={second.yellowBox}></div>
    <div className={second.firstimg}>
        <img  src="https://ableton-production.imgix.net/about/photo-1.jpg?dpr=1.25&fit=crop&h=640&ixjsv=1.1.3&w=640" alt=""/>
    </div>
    
    <div className={second.secondimg}>
    
        <img src="https://ableton-production.imgix.net/about/photo-2.jpg?dpr=1.25&fit=crop&h=384&ixjsv=1.1.3&w=512" alt=""/>
    
    </div>
    </section>
    <div className={second.text} >
        <h4>We make Live, Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</h4>
        <p>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
    </div>

    </>
  )
}

export default SecondSection