import Header from '../src/components/layouts/header/Header'
import Footer from '../src/components/layouts/footer/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h1>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>
        <p className='text-green-500'>Hello</p>
      </main>
      <Footer />
    </>
  )
}
