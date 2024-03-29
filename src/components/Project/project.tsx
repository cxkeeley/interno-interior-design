import Image from 'next/image'
import Project01 from '../../img/project1.png'
import Project02 from '../../img/project2.png'
import Project03 from '../../img/project3.png'
import Project04 from '../../img/project4.png'
import { RiArrowRightSLine } from '@remixicon/react'

const project = () => {
  return (
    <section className="mt-[80px] xl:mt-[150px] xl:mb-[-20px] relative z-20">
      <div className="container mx-auto max-w-full xl:px-0">
        <div className='text-center mb-24'>
          <h2 className='h2 mb-4'>Follow Our Projects</h2>
          <p className='max-w-2xl mx-auto'>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-[10rem] max-w-[75rem] justify-between items-center mx-[20px] md:ml-[240px] xxxl:ml-[360px] xxl:ml-[340px] xl:ml-[120px]'>
          <div className="w-full max-w-[548] h-full mx-auto">
            <Image className="mb-6" src={Project01} alt="project 1 duhh" />
            <div className='flex justify-between items-center w-full'>
              <div>
                <h3 className='h3'>Modern Kitchen</h3>
                <p>Decor/Architechture</p>
              </div>
              <button className='bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full items-center'>
                <RiArrowRightSLine color='#292F36' size={36} className='ml-4 '/>
              </button>
            </div>
          </div>

          <div className="w-full max-w-[548] h-full mx-auto">
            <Image className="mb-6" src={Project02} alt="project 2 duhh" />
            <div className='flex justify-between items-center w-full'>
              <div>
                <h3 className='h3'>Modern Kitchen</h3>
                <p>Decor/Architechture</p>
              </div>
              <button className='bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full items-center'>
                <RiArrowRightSLine color='#292F36' size={36} className='ml-4'/>
              </button>
            </div>
          </div>

          <div className="w-full max-w-[548] h-full mx-auto">
            <Image className="mb-6" src={Project03} alt="project 3 duhh" />
            <div className='flex justify-between items-center w-full'>
              <div>
                <h3 className='h3'>Modern Kitchen</h3>
                <p>Decor/Architechture</p>
              </div>
              <button className='bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full items-center'>
                <RiArrowRightSLine color='#292F36' size={36} className='ml-4'/>
              </button>
            </div>
          </div>

          <div className="w-full max-w-[548] h-full mx-auto">
            <Image className="mb-6" src={Project04} alt="project 3 duhh" />
            <div className='flex justify-between items-center w-full'>
              <div>
                <h3 className='h3'>Modern Kitchen</h3>
                <p>Decor/Architechture</p>
              </div>
              <button className='bg-accent-secondary hover:bg-accent/20 w-[70px] h-[70px] rounded-full items-center'>
                <RiArrowRightSLine color='#292F36' size={36} className='ml-4'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default project
