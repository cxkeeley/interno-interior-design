import React from 'react'
import Image from 'next/image'
import img from '../../img/img.png'
import { RiArrowRightLine, RiPhoneLine } from '@remixicon/react'

const About = () => {
  return (
    <section className="mt-[90px] xl:mt-[200px] relative z-20">
      <div className="container mx-auto xl:px-0 xxl:max-w-[1200px]">
        <div className="flex flex-col text-center xl:text-left xl:flex-row justify-between items-center gap-8 xl:gap-[74px] xxl:gap-[10px]">
          <div className="flex-1 order-2 xl:order-none max-w-xl flex flex-col xl:max-w-[410px] xl:mr-[126px] items-center xl:items-start gap-8 ">
            <h2 className="h2">
              We Create The Art of Stylish Living Stylishly
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>

            <div className='flex items-center justify-center xl:justify-start gap-4'>
              <div className='bg-accent/15 w-[93px] h-[93px] rounded-full flex justify-center items-center'>
                <RiPhoneLine color="#CDA274" size="36px" />
              </div>

              <div className='text-left'>
                <div className='text-2xl font-bold'>012345678</div>
                <div>Call Us Anytime</div>
              </div>
            </div>
            <button className='btn btn-primary mx-auto xl:mx-0'>
              Get Free Estimate <RiArrowRightLine size={36} color='#CDA274'/>
            </button>
          </div>
          {/* -------------------------------------- */}
          <div className="max-w-[453px] order-1 mx-auto xl:max-w-none">
            <Image src={img} alt="idk the img i guess who cares?"></Image>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
