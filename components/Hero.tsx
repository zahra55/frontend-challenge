import colors from '../core/theme/colors'

const Hero = () => {

  return (
    <div className={'hero'}>
      <div>
        <h3>Interaction Design Apprenticeship</h3>
        <h4>A fully funded work-study program to launch your tech career </h4>
        <body>
          Harbour.Space has partnered with SCG to empower driven talent and eliminate the barriers
          to accessing exceptional education and career opportunities through a Masters Fellowship.
        </body>
      </div>
      <div>
        <h5>Hi world</h5>
      </div>


      <style jsx>{`
        .hero {
          gap: 14px;
          display: flex;
          flex-direction: flex-row;
          justify-content: space-enenly;

        }
      `}</style>
    </div>
  )
}

export default Hero