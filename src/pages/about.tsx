import Layout from "../../components/Layout"
import useSWR from 'swr'
import axios from 'axios'

export const fetcher = (url: string) => axios.get(url).then(response => response.data)

const About = () => {

  const {data, error} = useSWR(
    'https://api.sampleapis.com/coffee/hot',
    fetcher
  )

  if(error) {
    return <p>{error.massage}</p>
  }

  if(!data) {
    return <p>Loading...</p>
  }

  if(data) {
    console.log('data: ', data)
  }

  return (
    <Layout
      title={`Harbour.Space - About`}
      invertTitle
      description={`A fully funded work-study program to launch your tech career`}>
      <div className={"about-page"}>
        <h3>About Page</h3>
      </div>

      <style jsx>{`
        .about-page {
          display: flex;
          justify-content: center;
          align-items: center;;
          flex-direction: column;
          height: 100vh;
        }
      `}</style>
    </Layout>

  )
}

export default About