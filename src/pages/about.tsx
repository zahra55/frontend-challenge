import Layout from "../../components/Layout"
import ScholarshipDetailsGrid from "../../components/About/ScholarshipDetailsGrid"


const About = () => {

  return (
    <Layout
      title={`Harbour.Space - About`}
      invertTitle
      description={`A fully funded work-study program to launch your tech career`}>
      <div className={"about-page"}>
        <h3>About Page</h3>
      </div>
    </Layout>

  )
}

export default About