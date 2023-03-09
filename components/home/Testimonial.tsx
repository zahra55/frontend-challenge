import Image from 'next/image'
import colors from '../../core/theme/colors'


type Props = {
  imageSrc: string
  studentName: string
  text: string
  studentId: string
  status: string
} & import('react').HTMLAttributes<HTMLDivElement>

const Testimonial: import('react').FC<Props> = ({ className, imageSrc, status, studentName, studentId, text, ...props }) => {
  // State ------------------------------------------------------------------- //
  
  // Handlers ---------------------------------------------------------------- //

  // Effects ----------------------------------------------------------------- //

  // Rendering --------------------------------------------------------------- //
  return (
    <div className={"container"} {...props}>



      <div className={"student"}>
        <div className="avatar">
            <Image
              loader={() => imageSrc} 
              src={imageSrc} 
              alt={"avatar"} 
              height={50} 
              width={50}
              style={{ objectFit: 'fill', overflow: 'hidden', borderRadius: '200px' }} />
          </div>
          <div className={"stud-info"}>
            <span>{studentName}</span>
            <span>{status}</span>
          </div>

      </div>

      <span className={"description"}>{text}</span>

      <div className={"t-footer"}>
        <span>Education   ·   B.A. Visual Design</span>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          border: 1px solid ${colors.stroke};
          border-radius: 4px;
          background-color: ${colors.background};
          max-width: 800px;
          min-height: 350px;
          flex-shrink: 0;

        }

        .avatar {
          display: flex;
          background-color: ${colors.white};
          border: 1px solid ${colors.stroke};
          border-radius: 200px;
          height=50px; 
          width=50px;
        }

        .description {
          font-weight: 300;
          font-size: 1rem;
          color: ${colors.grey};
          margin: 20px 30px;
        }

        .student {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          background-color: ${colors.white};
          gap: 20px;
          margin-bottom: 20px;
          padding: 20px;
        }

        .stud-info {
          display: flex;
          flex-direction: column;
        }

        .t-footer {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          background-color: ${colors.white};
          gap: 20px;
          padding: 20px;
        }

        @media only screen and (max-width: 800px) {
          .container {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            border: 1px solid ${colors.stroke};
            border-radius: 4px;
            background-color: ${colors.background};
            min-width: 400px;
            max-height: 400px;
            flex-shrink: 0;
            margin: 5px;
          }
        }
      `}</style>
    </div>
  )
}

export default Testimonial
