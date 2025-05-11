'use client'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';

const Carusol: React.FC = () => {
  return (
    <Carousel className='w-100 p-3 m-auto'>
      <Carousel.Item>
        <Image src="/images/ban1.webp" alt="" width={1400} height={450} className='rounded-2xl m-auto' />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="/images/ban2.webp" alt="" width={1400} height={450} className='rounded-2xl m-auto' />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="/images/ban3.webp" alt="" width={1400} height={450} className='rounded-2xl m-auto' />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carusol

