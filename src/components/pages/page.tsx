import { RiArrowRightLine } from '@remixicon/react'


const page = () => {
  return (
    <section className="steps mt-[80px] xl:mt-[200px] relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:m-[21px] xxl:m-[190px] xxxl:m-[380px] xxl:mt-[10px] gap-12 xl:grid-cols-3 xxxl:max-w-[1800px] xxl:max-w-[1600px]">
          <div className="text-center">
            <h3 className="h3 mb-5">Project plan</h3>
            <p className="mb-5 max-w-md lg:max-w-md xl:max-w-sm xxxl:max-w-sm mx-auto xxl:max-w-sm">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <a href="#" className='font-medium flex justify-center gap-2 pt-5'>Read more <RiArrowRightLine color='#CDA274'/></a>
          </div>
          <div className="text-center">
            <h3 className="h3 mb-5">Interior Work</h3>
            <p className="mb-5 max-w-md lg:max-w-md xl:max-w-sm xxxl:max-w-sm mx-auto xxl:max-w-sm">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <a href="#" className='font-medium flex justify-center gap-2 pt-5'>Read more <RiArrowRightLine color='#CDA274'/></a>
          </div>
          <div className="text-center">
            <h3 className="h3 mb-5">Realization</h3>
            <p className="mb-5 max-w-md lg:max-w-md xl:max-w-sm xxxl:max-w-sm mx-auto xxl:max-w-sm">
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