import React from "react";
import headshot from '../pictures/headshot.jpeg'

const Info = ()=>{
  const js = 'Javascript'

  return(
    <div className='info-container'>
      <section className='info-sect'>
        <h1 className='info-h1'>
          Hello, Im
          <p className='info-h1-p'> Josh</p>
        </h1>
        <h2 className='info-h2'>
          Full stack
          <p className='info-h2-p'>{js}</p>
          Developer
        </h2>
      </section>
      <section className='pic-sect'>
        <img className='info-pic' alt='my face' src={headshot}/>
      </section>
    </div>
  )
}

export default Info;