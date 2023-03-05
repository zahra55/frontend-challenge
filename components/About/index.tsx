import Image from "next/image"
import colors from "../../core/theme/colors"
import useSWR from 'swr'
import axios from 'axios'
import ScholarshipDetailsGrid from "./ScholarshipDetailsGrid"


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
        <div className="wrapper">
          <div className="box a">
            <Image 
              src="/about-image.png"
              alt="About image"
              height={380}
              width={380}/>
          </div>
          <div className="box b">
            <h3>About the apprenticeship</h3>
          </div>
          <div className="box c">
            <span className={"description"}>{data.scholarship.about.map((item: AboutItem) => <p key={item.id}>{item.data}</p>)}</span>
          </div>
        </div>
        <div>
          <ScholarshipDetailsGrid 
            scholarshipValue={data.scholarship.total_value}
            tuition={data.scholarship.tuition} 
            stipend={data.scholarship.stipend_per_month}
            remaining={data.scholarship.remaining}
            studyCommitment={data.scholarship.study_commitment}
            internshipCommitmentText={data.scholarship.internship_commitment_text}
            workCommitment={data.scholarship.work_commitment}
            degree={data.scholarship.degree}
            studyCommitmentText={data.scholarship.study_commitment_text} />
        </div>
       


      
      <style jsx>{`
        .about {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1.5rem 7rem;
        }

        .wrapper {
          display: grid;
          grid-template-row: repeate(4, 100px)
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 5px 40px;
    
        }


        .a {
          grid-row: 1 / 4;
          grid-column: 1 / 3;
          object-fit: cover;
          border-radius: 100%;
          overflow: hidden;
        }

        .b {
          grid-row: 1 / 1;
          grid-column: 4;
          display: flex;
          align-items: center;
        }

        .c {
          grid-row: 2 / 4;
          grid-column: 4 ;
        }

        .a, h3 {
          color: ${colors.primary};
          font-size: 3rem;
        }

        .description {
          font-weight: 300;
          font-size: 1.375rem;
          color: ${colors.grey}
        }

        .about-img {
          overflow: hidden;
        }

        .about-line {
          color: ${colors.primary};
          font-size: 3rem;
        }

        @media only screen and (max-width: 800px) {
          .about {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding: 20px;
          }

          .wrapper {
            display: flex;
            flex-direction: column;
          }

          .about-line {
            color: ${colors.primary};
            font-size: 1rem;
          }

          .description {
            font-weight: 300;
            font-size: 1.375rem;
            color: ${colors.grey}
          }

          .a {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}


export default About