import Navbar from '../components/navbar/navbar'
import Hero from '../components/hero-section/hero'
import Pages from '../components/pages/page'
import About from '../components/about/about'
import Testimonial from '@/components/testimonial/testimonial'
import Brand from '@/components/client-logo/brand'

export default function Home() {
  return (
    <body className="bg-gray-100">
      {/* placed here to avoid overflow issues */}
      <Navbar />
      <main className="max-w-[1920px] mx-auto bg-white overflow-hidden">
        {/* temporary grid */}
        <div className="xl:bg-grid xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 left-0 right-0 z-25"></div>
        <Hero />
        <Pages />
        <About />
        <Testimonial/>
        <Brand/>
        <div className="h-[3000px]"></div>
      </main>
    </body>
  )
}
