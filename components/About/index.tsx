import Image from "next/image"
import colors from "../../core/theme/colors"
import Button from "../basic/Button"
import useSWR from 'swr'
import axios from 'axios'


interface Scolarship {
  id: number
  scholarship_name: string
}

interface AboutItem {
  id: number
  data: string
}

export const fetcher = (url: string) => axios.get(url).then(response => response.data)

const About = () => {

  const {data, error} = useSWR(
    'https://pre-prod.harbour.space/api/v1/scholarship_pages/25',
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
    <div className={"about"}>
      <div className={"box about-inner"}>
          <h3 className='about-line'>About the apprenticeship</h3>
          <span>{data.scholarship.about.map((item: AboutItem) => <span key={item.id}>{item.data}</span>)}</span>
          <div>{data.scholarship.total_value}</div>
          <div>
            <div>{data.scholarship.name}</div>
            <div>
              <span>Scholarship value: </span>
              <span>{data.scholarship.total_value}</span>
            </div>
          </div>
      </div>
      
      <style jsx>{`
        .about-inner {
          display: flex;
          flex-direction: column;
          justify-content: center; 
        }

        .image-container {
          object-fit: cover;
          border-radius: 100%;
          overflow: hidden;
        }

        .about-img {
          overflow: hidden;
        }

        .about-line {
          color: ${colors.primary};
          font-size: 3rem;
        }
      `}</style>
    </div>
  )
}


export default About