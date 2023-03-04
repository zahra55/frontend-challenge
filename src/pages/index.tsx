import { Inter } from 'next/font/google'
import About from '../../components/About'
import Hero from '../../components/Hero'
import Layout from '../../components/Layout'
import useSWR from 'swr'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })
export const fetcher = (url: string) => axios.get(url).then(response => response.data)

export default function Home() {

  return (
    <Layout
      title={`Harbour.Space - Frontend Challenge`}
      invertTitle
      description={`A fully funded work-study program to launch your tech career`}>
      
      <Hero />
      <About />
    </Layout>
  )
}
