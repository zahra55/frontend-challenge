import Image from 'next/image'
import colors from '../core/theme/colors'

const Hero = () => {

  return (
    <div className={'hero'}>

      <div className={"wrapper"}>
        <div className={"box a"}>
          <h3 className='hero-line'>Interaction Design Apprenticeship</h3>
        </div>
        <div className={"box b"}>
          <Image
            src="/zeptolap.png"
            alt="zeptolap"
            width={80}
            height={80}
            priority />
            <div>
              <p className={"label"}>Powered by:</p>
              <p className={"by"}>Zeptolap</p>
            </div>
        </div>
        <div className={"box c"}>
          <p className={"sub-line"}>A fully funded work-study program to launch your tech career</p>
          <p className={"description"}>Harbour.Space has partnered with SCG to empower driven talent and eliminate the barriers to accessing exceptional education and career opportunities through a Masters Fellowship.</p>
          <h5>Position: Marketing Performance</h5>
        </div>
        <div className={"box d"}>
          <div className={"box e"}>E</div>
          <div className={"box f"}>F</div>
          <div className={"box g"}>G</div>
        </div>
      </div>


      <style jsx>{`
        .hero {
          display: flex;
          justify-content: center;
          align-content: center;
          margin-top: 150px;
          margin-bottom: 150px
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
          background-color: #ccc;
          color: #444;
        }
      
        .a {
          grid-column: col / span 2;
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
          gap: 30px;
        }
      
        .d{
          grid-column: col 3 / span 2;
          grid-row: row 2;
          display: grid;
          grid-gap: 10px;
          grid-template-columns: 1fr 1fr;
        }
      
        .e {
          grid-column: 1 / 3;
          grid-row: 1;
        }
      
        .f {
          grid-column: 1;
          grid-row: 2;
        }
      
        .g {
          grid-column: 2;
          grid-row: 2;
        }
        

        .hero-line {
          color: ${colors.primary};
          font-size: 48px;
        }

        .label {
          font-weight: 400;
          font-size: 14px;
          color: ${colors.grey}
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
          font-size: 22px;
          color: ${colors.grey}
        }
      `}</style>
    </div>
  )
}

export default Hero