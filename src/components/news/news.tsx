import React from 'react'
import Image from 'next/image'
import News01 from '../../img/news01.png'
import News02 from '../../img/news02.png'
import News03 from '../../img/news03.png'
import { RiArrowRightSLine } from '@remixicon/react'

const News = () => {
  return (
    <section className="mt-[80px] xl:mt-[150px] xl:mb-[-20px] relative z-20">
      <div className="container mx-auto">
        <div className='text-center'>
          <h2 className='h2'>Articles & News</h2>
          <p className='max-w-4xl mx-auto mb-[3rem]'>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 xl:mr-[-28px] xxl:ml-[169px] xxl:max-w-[76.7rem] xxxl:max-w-[76.7rem] xxxl:ml-[22.5rem]">
          <div className="w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0 bg-white">
            <div>
              <Image src={News01} alt="this is a news duhh" />
            </div>
            <div className="flex flex-col gap-[30px]">
              <h3 className="h3">
                Let’s Get Solution For Building Construction Work
              </h3>
            </div>
            <div className="flex items-center justify-between mt-[40px]">
              <p className="text-base">26 December,2022 </p>
              <button className="bg-accent-secondary w-[52px] h-[52px] rounded-full group-hover:white transition-all">
                <RiArrowRightSLine
                  size={36}
                  color="#292F36"
                  className="ml-2"
                ></RiArrowRightSLine>
              </button>
            </div>
          </div>
          <div className="w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0 bg-white">
            <div>
              <Image src={News02} alt="this is a news duhh" />
            </div>
            <div className="flex flex-col gap-[30px]">
              <h3 className="h3">
                Low Cost Latest Invented Interior Designing Ideas.
              </h3>
            </div>
            <div className="flex items-center justify-between mt-[40px]">
              <p className="text-base">26 December,2022 </p>
              <button className="bg-accent-secondary w-[52px] h-[52px] rounded-full group-hover:white transition-all">
                <RiArrowRightSLine
                  size={36}
                  color="#292F36"
                  className="ml-2"
                ></RiArrowRightSLine>
              </button>
            </div>
          </div>
          <div className="w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0 bg-white">
            <div>
              <Image src={News03} alt="this is a news duhh" />
            </div>
            <div className="flex flex-col gap-[30px]">
              <h3 className="h3">
                Best For Any Office & Business Interior Solution
              </h3>
            </div>
            <div className="flex items-center justify-between mt-[40px]">
              <p className="text-base">26 December,2022 </p>
              <button className="bg-accent-secondary w-[52px] h-[52px] rounded-full group-hover:white transition-all">
                <RiArrowRightSLine
                  size={36}
                  color="#292F36"
                  className="ml-2"
                ></RiArrowRightSLine>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default News
