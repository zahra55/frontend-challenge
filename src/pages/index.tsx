
import { Inter } from 'next/font/google'
import Layout from '../../components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout
      title={`Harbour.Space - Frontend Challenge`}
      invertTitle
      description={`A fully funded work-study program to launch your tech career`}>
     
     <div>Hello world</div>
    
    </Layout>
  )
}
