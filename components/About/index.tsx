import Image from "next/image"
import colors from "../../core/theme/colors"



const About = () => {

  return (
    <div className={"about"}>
      <div className={"box about-inner"}>
        <div className={"image-container"}>
          <Image
            className={"about-img"} 
            src={"/about-image.png"} 
            alt={"About image"}
            height={380}
            width={380} />
        </div>
        <div>
          <h3 className='about-line'>About the apprenticeship</h3>
          <p>
          Our scholarships are designed to give talented and driven young people from any background access to top-class education, experience and network. We offer a fully-funded master’s degree alongside an apprenticeship and a guaranteed job upon graduation.  
          </p>
        </div>
      </div>
      
      <style jsx>{`

        .about-inner {
          display: flex;
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