import React from 'react'
import { useState,useEffect } from 'react'
import { useSwiper } from 'swiper/react'
import  LeftArrow from '../../src/assests/Left-Arrow.png';
import styles from './CarouselLeft.module.css'

const CarouselLeftNav = () => {
    const swiper = useSwiper();
    const [isBeginning,setIsBeginning] = useState(swiper.isBeginning)

    useEffect(() => {
        swiper.on("slideChange", () => {
            setIsBeginning(swiper.isBeginning)
        })
    },[swiper])
  return (
    <div className={styles.leftNavigation}>
        {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeftNav