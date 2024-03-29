import { RiArrowRightLine } from '@remixicon/react'


const page = () => {
  return (
    <section className="steps mt-[80px] xl:mt-[200px] relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:m-[185px] gap-12 xl:grid-cols-3">
          <div className="text-center">
            <h3 className="h3 mb-5">Project plan</h3>
            <p className="mb-5 xl:max-w-sm max-w-md mx-auto">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <a href="#" className='font-medium flex justify-center gap-2 mt-1'>Read more <RiArrowRightLine color='#CDA274'/></a>
          </div>
          <div className="text-center">
            <h3 className="h3 mb-5">Interior Work</h3>
            <p className="mb-5 xl:max-w-sm max-w-md mx-auto">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <a href="#" className='font-medium flex justify-center gap-2 mt-1'>Read more <RiArrowRightLine color='#CDA274'/></a>
          </div>
          <div className="text-center">
            <h3 className="h3 mb-5">Realization</h3>
            <p className="mb-5 xl:max-w-sm max-w-md mx-auto">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <a href="#" className='font-medium flex justify-center gap-2 pt-5'>Read more <RiArrowRightLine color='#CDA274'/></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page