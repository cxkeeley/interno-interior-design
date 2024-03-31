import Logo01 from '../../img/01.svg'
import Logo02 from '../../img/02.svg'
import Logo03 from '../../img/03.svg'
import Logo04 from '../../img/04.svg'
import Logo05 from '../../img/05.svg'
import Image from 'next/image'


const Brand = () => {
  return (
    <section className="mt-[90px] xl:mt-[190px] relative z-20">
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row justify-between items-center gap-12 xxl:gap-1 xl:m-[14rem]'>
          <Image src={Logo01} alt='logo1 das it'></Image>
          <Image src={Logo02} alt='logo2 das it'></Image>
          <Image src={Logo03} alt='logo3 das it'></Image>
          <Image src={Logo04} alt='logo4 das it'></Image>
          <Image src={Logo05} alt='logo5 das it'></Image>
        </div>
      </div>
    </section>
  )
}

export default Brand