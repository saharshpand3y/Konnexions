import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

//1. cursor-pointer to be put in parent class
//2. Make a separate folder for the links to be put in

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen bg-[url('/img/background.jpg')] bg-no-repeat bg-cover bg-center bg-fixed pointer-events-none">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@600&display=swap">
        </link>
        <nav className='absolute top-2 right-0 text-xl'>
          <ul className='flex'>
            <li className="mr-6 bg-blue-500 rounded-full text-center text-base px-2 py-1 text-white hover:bg-white hover:text-blue-500 ease-in duration-100">
              <Link href='/Blog/'>
                <a>Blog</a>
              </Link>
            </li>
            <li className="mr-6 bg-blue-500 rounded-full text-center text-base px-2 py-1 text-white hover:bg-white hover:text-blue-500 ease-in duration-100">
              <Link href="/Events/">
                <a>Events</a>
              </Link>
            </li>
            <li className="mr-6 bg-blue-500 rounded-full text-center text-base px-2 py-1 text-white hover:bg-white hover:text-blue-500 ease-in duration-100">
              <Link href="/Team/">
                <a>Team</a>
              </Link>
            </li>
            <li className="mr-6 bg-blue-500 rounded-full text-center text-base px-2 py-1 text-white hover:bg-white hover:text-blue-500 ease-in duration-100">
              <Link href="/Contact/">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </Head>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2'>
        <div className='text-6xl font-unbounded slideInLeft'>
          <span className="textRightToLeft">KONN</span><span className='textLeftToRight'>EXIONS</span>
        </div>
      </div>
      <div className='absolute top-3/4 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-auto cursor-pointer'>
        <div className='bg-yellow-500 rounded-full text-center text-base p-2 px-8 pointer-events-auto hover:bg-yellow-600 ease-in duration-100'>
          <Link href="#"><a><h1>ABOUT US</h1></a></Link>
        </div>
      </div>
      <div className='absolute h-screen w-screen'>
        <div className="cursor-pointer absolute bottom-0 right-0 pr-4 pb-24 mb-8 pointer-events-auto">
          <Link href="https://www.instagram.com/kiitkonnexions/">
            <a><Image src="/img/insta.png" alt="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffreepngimg.com%2Fpng%2F62837-instagram-icons-photography-computer-logo-icon&psig=AOvVaw3hvc6dlJtWWpI_qlcHIFv-&ust=1679321552422000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMiwxbeW6P0CFQAAAAAdAAAAABBZ" width={50} height={50} /></a>
          </Link>
        </div>
      </div>
      <div className='absolute h-screen w-screen'>
        <div className="cursor-pointer absolute bottom-0 right-0 pr-6 pb-14 mb-8 pointer-events-auto">
          <Link href="https://www.facebook.com/kiitkonnexions/">
            <a><Image src="/img/facebook.jpg" alt="https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-library.com%2Ficon%2Ffacebook-icon-black-and-white-3.html&psig=AOvVaw2UsGSF5qusZ7oe9VdU-K5g&ust=1679323101381000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJiK-5mc6P0CFQAAAAAdAAAAABAZ" width={40} height={40} /></a>
          </Link>
        </div>
      </div>
      <div className='absolute h-screen w-screen'>
        <div className="cursor-pointer absolute right-0 bottom-0 pr-4 mb-8 pointer-events-auto">
          <Link href="https://twitter.com/konnexions_kiit">
            <a><Image src="/img/twitter.png" alt="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F578712620849900143%2F&psig=AOvVaw0IiCrUwKTj49aMlkaWcs5Y&ust=1679323205422000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPCLysuc6P0CFQAAAAAdAAAAABAE" width={50} height={50} /></a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home