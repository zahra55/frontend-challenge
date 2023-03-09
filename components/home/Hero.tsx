import Image from 'next/image'
import colors from '../../core/theme/colors'
import Button from '../basic/Button'
import CountDown from './CountDown'
import useSWR from 'swr'
import { fetcher } from '@components/pages/api/api'

const Hero = () => {
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


  const goToAbout = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
    console.log('clicked')
  }

  return (
    <div className={'hero'}>
      <div className={"wrapper"}>
        <div className={"box a"}>
          <h3 className='hero-line'>{data.scholarship.name}</h3>
        </div>
        <div className={"box b"}>
          <Image
            src="/zeptolap.png"
            alt="zeptolap"
            width={60}
            height={60}
            priority />
            <div>
              <p className={"label"}>Powered by:</p>
              <p className={"by"}>Zeptolap</p>
            </div>
        </div>
        <div className={"box c"}>
          <p className={"sub-line"}>
            A fully funded work-study program to launch your tech career
          </p>
      
            {data.scholarship.description.map((item: {id: string, data: string}) => <p key={item.id} className={"description"}>{item.data}</p>)}
         
          <h5>Position: Marketing Performance</h5>
          <div className='cta'>
            <Button label='Apply Now' onClick={goToAbout} />
          </div>
          
        </div>
        <div className={"box d"}>
          <div className={"box e"}>
            <p className={"title"}>Application closes in</p>
            <CountDown />
          </div>
          <div className={"box f"}>
            <div className={"box f1"}>
              <span className={"f-label"}>Location</span>
              <span className={"info"}>{data.scholarship.location.name}</span>
            </div>
            <div className={"box f2"}>
              <span className={"f-label"}>Duration</span>
              <span className={"info"}>1 Year</span>
            </div>
            <div className={"box f3"}>
              <span className={"f-label"}>Start date</span>
              <span className={"info"}>{data.scholarship.scholarship_start_date}</span>
            </div>
            <div className={"box f4"}>
              <span className={"f-label"}>End Date</span>
              <span className={"info"}>{data.scholarship.application_end_date}</span>
            </div>
          </div>
        </div>
      </div>


      <style jsx>{`
        .hero {
          display: flex;
          justify-content: center;
          align-content: center;
          margin-top: 50px;
          margin-bottom: 100px;
          padding: 20px;
          
        }
        .wrapper {
          display: grid;
          grid-gap: 10px;
          grid-template-columns: repeat(4, [col] 230px ) ;
          grid-template-rows: repeat(2, [row] auto  );
          background-color: #fff;
          color: #444;
        }

        .box {
          color: #fff;
          border-radius: 5px;
          padding: 20px;
          font-size: 150%;
      
        }
        .box .box {
          color: #444;
        }
      
        .a {
          grid-column: col / span 3;
          grid-row: row;
        }

        .b {
          grid-column: col 3 / span 2;
          grid-row: row;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 14px;
        }
      
        .c {
          grid-column: col / span 2;
          grid-row: row 2;
          display: grid;
          gap: 10px;
        }
      
        .d{
          grid-column: col 3 / span 2;
          grid-row: row 2;
          display: flex;
          flex-direction: column;
          grid-gap: 10px;
          grid-template-columns: 1fr 1fr;
        }
      
        .e {
          grid-column: 1 / 3;
          grid-row: 1;
          background-color: ${colors.white};
          border: solid 1px ${colors.stroke};
          border-radius: 5px;
        }
      
        .f {
          grid-column: 1;
          grid-row: 2;
          background-color: ${colors.white};
          border: solid 1px ${colors.stroke};
          border-radius: 5px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          grid-column-gap: 0px;
          grid-row-gap: 0px;
        }
      
        .g {
          grid-column: 2;
          grid-row: 2;
        }
        

        .hero-line {
          color: ${colors.primary};
          font-size: 3rem;
        }

        .label, .f-label {
          font-weight: 400;
          font-size: 0.875rem;
        }

        .label {
          color: ${colors.grey};
        }

        .f-label {
          color: ${colors.primary}
        }

        .info {
          font-weight: 400;
          font-size: 1rem;
          color: ${colors.grey};
        }
        .by {
          font-weight: 300;
          font-size: 27px;
          color: ${colors.grey}
        }

        .sub-line {
          font-weight: 500;
          font-size: 22px;
          color: ${colors.grey}
        }

        .description {
          font-weight: 300;
          font-size: 1.375rem;
          color: ${colors.grey}
        }

        .title {
          Font-style: Medium;
          Font-size: 16px;
          Line-height: 24px;
          Align: Left;
          Vertical-align: Top;
          Letter-spacing: -0.15px;
          color: ${colors.primary}
        }

        .f1, .f2, .f3, .f4 {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .cta {
          display: flex;
          justify-content: flex-start;
        }

        @media only screen and (max-width: 800px) {
          .hero {
            display: flex;
            flex-direction: column;
            margin-top: 50px;
            margin-bottom: 50px;
            padding: 20px;
          }
          .wrapper {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: 1fr ;
            grid-template-rows: repeat(6, [row] auto  );
          }

          .a {
            grid-column: 1;
            grid-row: 1;
          }
  
          .b {
            grid-column: 1;
            grid-row: 2;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 14px;
          }
        
          .c {
            grid-column: 1;
            grid-row: 4;
            display: grid;
            gap: 10px;
          }
        
          .d{
            grid-column: 1;
            grid-row: 3;
            display: flex;
            flex-direction: column;
            grid-gap: 10px;
            grid-template-columns: 1fr 1fr;
          }
        
          .e {
            grid-column: 1 / 3;
            grid-row: 1;
            background-color: ${colors.white};
            border: solid 1px ${colors.stroke};
            border-radius: 5px;
          }
        
          .f {
            grid-column: 1;
            grid-row: 2;
            background-color: ${colors.white};
            border: solid 1px ${colors.stroke};
            border-radius: 5px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 0px;
            grid-row-gap: 0px;
          }
        
          .g {
            grid-column: 2;
            grid-row: 2;
          }

          .hero-line {
            color: ${colors.primary};
            font-size: 2.188rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Hero