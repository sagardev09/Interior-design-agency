import Image from 'next/image'
import Header from './component/Header'
import Aboutus from './component/Aboutus'
import LearnMore from './component/LearnMore'
import Options from './component/Options'
import Decoration from './component/Decoration'
import Starter from './component/Starter'
import Footer from './component/Footer'
import Banner from './component/Banner'

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      <Header />
      <Banner />
      <Aboutus />
      <LearnMore />
      <Options />
      <Decoration />
      <Starter />
      <Footer />
    </main>
  )
}
