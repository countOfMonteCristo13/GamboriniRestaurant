import React from 'react'
import './gallery.css'

import { images } from '../../constants'
import { SubHeading} from '../../components';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const imgs = [images.gallery01,images.gallery02,images.gallery03,images.gallery04];

const Gallery = () => {

  const scrollRef = React.useRef(null);

  const scroll = (direction) =>{

    const { current } = scrollRef;

    if(direction ==='left'){
      current.scrollLeft -= 300;
    }else{
      current.scrollLeft += 300;
    }
  }


  return (
    <div className='app__gallery flex_center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram"/>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color:'#aaa', marginTop:'2rem'}}>Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
        <button type='buttom' className='custom__button'>View More</button>
      </div>

      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {
            imgs.map((image,index) =>(
              <div className='app__gallery-images_card flex__center' key={`gallery_image-${index+1}`}>
                <img src={image} alt="gallery" />
                <BsInstagram className='gallery__image-icon'/>
              </div>
            ))
          }
        </div>

        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')}/>
        </div>
      </div>
    </div>
  )
}

export default Gallery