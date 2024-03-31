import { RiArrowRightLine } from '@remixicon/react'
import React from 'react'

const Contact = () => {
  return (
    <section className="mt-[80px] xl:mt-[170px] xl:mb-[-20px] relative z-20">
      <div className="container mx-auto bg-primary xl:rounded-[70px] py-[80px] max-w-[75rem]">
        <div className="text-center">
          <h1 className="h1-extra text-white mb-4">Wanna join the interno?</h1>
          <p className="text-white mb-8 max-w-sm xl:max-w-none mx-auto">
            It is a long established fact will be distracted.
          </p>
          <button className="btn btn-accent mx-auto">
            Connect with us
            <RiArrowRightLine color='#292F36'/>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact
