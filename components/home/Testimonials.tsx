import Testimonial from "./Testimonial"
import useSWR from 'swr'
import { apiURL, fetcher } from "@components/pages/api/api"



type Student = {
  id: string
  name: string
  status: string
  profile_picture: {src: string}
}

type Testimonial = {
  id: string
  image: string
  text: string
  student: Student
}


const Testimonials = () => {
  const {data, error} = useSWR( `${apiURL}/15`, fetcher)

  if(error) {
    return <p>{error.massage}</p>
  }

  if(!data) {
    return <p>Loading</p>
  }


  return (
   
    <div className={"scrollable-x"}>
      {data ? data.testimonials.map((item: Testimonial) => 
          <Testimonial
            key={item.id} 
            id={item.id}
            studentId={item.student.id}
            studentName={item.student.name} 
            imageSrc={item.student.profile_picture.src}
            text={item.text}
            status={item.student.status} />) : <p>no data</p> }
      
      <style jsx>{`

        .scrollable-x {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 60%;
          gap: 10px;
          overflow-x: auto;
          overscroll-behavior-inline: contain;
          padding: 20px 40px;
          margin: 5px;
        }

        @media only screen and (max-width: 800px) {
          .scrollable-x {
            grid-auto-columns: 110%;
            display: grid;
            grid-auto-flow: column;
            gap: 10px;
          }

        }
        
      `}</style>
    </div>
  )
}

export default Testimonials