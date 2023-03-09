import Layout from "../../components/Layout"



const About = () => {

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