import React from 'react'
import './findUs.css'

import { images } from '../../constants'
import { SubHeading } from '../../components'

const FindUs = () => {
  return (
    <div className='app__bg app__wrapper section__padding' id='contact'>
      <div className='app__wrapper_info'>
            <SubHeading title="Contact" />
        <h1 className='headtext__cormorant' style={{marginBottom:'3rem'}}>Find Us</h1>
        <div className='app__wrapper-content'>
            <p className='p__opensans'>Bulevar Cara Lazara mrtvoga 33a</p>
            <p className='p__cormorant' style={{color:'#dcca87', margin:'2rem 0'}}>Opening Hours</p>
            <p className='p__opensans'>Monday to Friday: 10:00 - 02:00</p>
            <p className='p__opensans'>Saturday to Sunday:10:00 - 03:00</p>

        </div>
        <button className='custom__button' style={{marginTop:'2rem'}}>Visit Us</button>
      </div>


      <div className='app__wrapper_img'>
        <img src={images.findus} alt="findus" />

      </div>
    </div>
  )
}

export default FindUs


