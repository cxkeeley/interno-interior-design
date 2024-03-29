import React from 'react'

const stats = () => {
  return (
    <section className='mt-[100px] xl:mt-[230px] xl:mb-[-20px] relative z-20 bg-accent-secondary py-[80px] xl:py-[150px]'>
      <div className="container mx-auto">
        <div className='grid grid-cols-1 xl:grid-cols-4'>
          <div className='text-center xl:border-r xl:border-accent'>
            <h3 className='h1 mb-5 font-primary text-accent'>12</h3>
            <p className='mb-10'>Years Of Experience</p>
          </div>
          <div className='text-center xl:border-r xl:border-accent'>
            <h3 className='h1 mb-5 font-primary text-accent'>85</h3>
            <p className='mb-10'>Success Project</p>
          </div>
          <div className='text-center xl:border-r xl:border-accent'>
            <h3 className='h1 mb-5 font-primary text-accent'>15</h3>
            <p className='mb-10'>Active Project</p>
          </div>
          <div className='text-center xl:border-r'>
            <h3 className='h1 mb-5 font-primary text-accent'>95</h3>
            <p>Happy Customers</p>
          </div>
        </div>  
      </div>
    </section>
  )
}

export default stats