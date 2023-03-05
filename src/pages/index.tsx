import { Inter } from 'next/font/google'
import About from '../../components/About'
import Hero from '../../components/Hero'
import Layout from '../../components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <Layout
      title={`Harbour.Space`}
      invertTitle
      description={`A fully funded work-study program to launch your tech career`}>
      
      <Hero />
      <About />
    </Layout>
  )
}
