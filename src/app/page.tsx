import Image from 'next/image'
import ContentArea from './components/contentArea'

export default function Home() {
  return (
   <>
      <section className='min-h-screen pt-10 pb-7 px-3 grid place-items-center gap-4 md:grid-cols-2 lg:container lg:mx-auto'>
        <ContentArea name='New recipes' bgColor='bg-yellowish'/>
        <ContentArea name='Toplist' bgColor='bg-pinkish'/>
        <ContentArea name='Categories' bgColor='bg-purpleish'/>
        <ContentArea name="Top users" bgColor='bg-tealish'/>
      </section>
   </> 
  )
}
