import Header from '../src/components/layouts/header/Header'
import Footer from '../src/components/layouts/footer/Footer'
import axios from 'axios'

export default function Home() {
  console.warn('props ', props)
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

export async function getStaticProps() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`
  )

  return {
    props: {
      data: data || {},
    },
    revalidate: 1,
  }
}
