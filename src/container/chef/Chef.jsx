import React from 'react'
import './chef.css'

import { images } from '../../constants'
import { SubHeading } from '../../components'

const Chef = () => {
  return (
    <div className='app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse' id='velja'>
        <img src={images.velimir} alt="chef" />
      </div>
      <div className='app__wrapper_info'>
        <SubHeading title="Chef's Word"/>
        <h1 className='headtext__cormorant'>What I Believe In</h1>
        <div className='app__chef-content'>
            <div className='app__chef-content_quote'>
                <img src={images.quote} alt="quote" />
                <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <p className='p__opensans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quidem, doloremque earum, exercitationem suscipit fuga, recusandae rerum sapiente dolores placeat vel sed blanditiis labore maxime nihil minima est eum! Autem.</p>
        </div>

        <div className='app__chef-sign'>
            <p>Velimir Jocović</p>
            <p className='p__opensans'>Chef</p>
            <div className='app__chef-signature flex__center'>
              <img src={images.signature} alt="sign" />
            </div>

        </div>
      </div>
    </div>
  )
}

export default Chef
