import { RiArrowRightLine } from '@remixicon/react'

const Hero = () => {
  return (
    <>
      <section className="h-[640px] xl:h-[840px] bg-hero-background bg-center lg:bg-cover bg-no-repeat xl:rounded-bl-[290px] relative z-20">
        <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">
          <div className=" w-[567px] flex flex-col items-center text-center xl:text-left xxxl:ml-[350px] xxl:ml-[160px] lg:items-start">
            <h1 className="h1 mb-8">Let Your Home Be Unique</h1>
            <p className="mb-8">
              There are many variations of the passages of lorem Ipsum
              from available, majority.
            </p>
            <button className="btn btn-primary mx-auto xl:mx-0">Get Started <RiArrowRightLine size={36} color='#CDA274'/></button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
