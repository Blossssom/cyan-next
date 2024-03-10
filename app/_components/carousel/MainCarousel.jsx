'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export default function MainCarousel() {
    const [emblaRef]  = useEmblaCarousel({ loop: true })
  return (
    <article className='embla__viewport overflow-hidden w-full' ref={emblaRef}>
        <div className='embla__container flex'>
            <div className={`embla__slide mx-10 flex-none w-[80%] min-w-0 h-[700px] bg-slate-900`}>
                 slide1
            </div>       
        </div>
    </article>
  )
}
