import User01 from '../../img/01.png'
import User02 from '../../img/02.png'
import User03 from '../../img/03.png'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <section className="mt-[100px] xl:mt-[230px] xl:mb-[-20px] relative z-20">
      <div
        className="container mx-auto bg-accent-secondary rounded-[70px]
      px-6 xl:max-w-[1200px] xl:h-[760px] h-[90rem]"
      >
        <div className="flex flex-col items-center pt-[88px] pb-[110px]">
          <h2 className="h2 mb-9 text-center max-w-[500px]">
            What the People Thinks About Us
          </h2>
        </div>
        <div className="w-full h-[400px]">
          <div className="flex flex-col xl:flex-row">
            <div className="w-full max-w-[370px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto mb-5">
              <div className="flex gap-4 mb-6">
                <Image src={User01} alt="this is user 1"></Image>
                <div>
                  <h3>Nattasha Mith</h3>
                  <div>Greenville, USA</div>
                </div>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the typesetting industry.
                Ipsum has been.
              </p>
            </div>
            <div className="w-full max-w-[370px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto mb-5">
              <div className="flex gap-4 mb-6">
                <Image src={User02} alt="this is user 2"></Image>
                <div>
                  <h3>Raymond Galario</h3>
                  <div>Sydney, Australia</div>
                </div>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the typesetting industry.
                Ipsum has been.
              </p>
            </div>
            <div className="w-full max-w-[370px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto mb-5">
              <div className="flex gap-4 mb-6">
                <Image src={User03} alt="this is user 3"></Image>
                <div>
                  <h3>Benny Roll</h3>
                  <div>Ohio, USA</div>
                </div>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the typesetting industry.
                Ipsum has been.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
