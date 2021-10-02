import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/Link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Sammi! I'm a developer and Minecraft streamer.
        </p>
        <p>You can find me on {' '} 
          <Link href="https://www.twitter.com/sammidoesthings">
            <a>Twitter</a>
          </Link>
          {' '}
        , in the Overworld or the Nether, and sometimes enjoying a foggy San Francisco beach.
        </p>
        <p>This is my first {' '}
          <Link href="/posts/first-post">
            <a>blog post!</a>
          </Link>
            </p>
        {/* <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p> */}
      </section>
    </Layout>
  )
}