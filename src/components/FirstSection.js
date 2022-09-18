import React from 'react'
import first from './first.module.css'
function FirstSection() {
  return (
    <>
    <div className={first.image}>
        <img src = "https://images.pexels.com/photos/5962647/pexels-photo-5962647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2https://images.pexels.com/photos/5962647/pexels-photo-5962647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="1300" height="700" />
    </div>

    <div className={first.text}
    //  style={{
    //     marginLeft:"30%", 
    //     marginRight: "30%",
    //     height:"300",
    //     fontSize:"30px",
    //     marginTop: "100px",
    //     marginBottom: "30px",
    //     }}
    >
        <h4>We make Live, Push and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</h4>
        <p>Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
    </div>
    </>
    
  )
}

export default FirstSection