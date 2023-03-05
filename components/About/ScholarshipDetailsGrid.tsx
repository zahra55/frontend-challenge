import colors from "../../core/theme/colors"



type Props = {
  scholarshipValue: string
  tuition: string
  stipend: string
  remaining: string
  studyCommitment: string
  internshipCommitmentText: string
  workCommitment: string
  degree: string
  studyCommitmentText: string
}

const ScholarshipDetailsGrid: import('react').FC<Props> = ({scholarshipValue, tuition, stipend, remaining, studyCommitment, internshipCommitmentText, workCommitment, degree, studyCommitmentText }) => {


  return (
    <>
      <div className={"wrapper"}>
        <div className={"box a"}>
          <div className={"info"}>
            <span className={"label"}>Scholarship value</span>
            <span className={"value"}>{scholarshipValue}</span>
          </div>
          <div className={"specifications-wrapper"}>
            <div className={"specifications"}>
              <div className={"row1"}>
                <div className={"s"}>
                  <span className={"s-label"}>Tuition covered</span>
                  <span className={"s-value"}>{tuition}</span>
                </div>
                <div className={"s"}>
                  <span className={"s-label"}>Remaining</span>
                  <span className={"s-value"}>{remaining}</span>
                </div>
              </div>
              <div className={"row2"}>
                <div className={"s"}>
                  <span className={"s-label"}>Living stipend</span>
                  <span className={"s-value"}>{stipend}/month</span>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        <div className={"box b"}>
          <div className={"s"}>
            <span className={"s-label"}>Study commitment</span>
            <span>{studyCommitment} hours / day</span>
            <span className={"s-value"}>{internshipCommitmentText}</span>
          </div>

        </div>
        <div className={"box c"}>
          <div className={"s"}>
            <span className={"s-label"}>Work commitment</span>
            <span>{workCommitment} hours / day</span>
            <span className={"s-value"}>{workCommitment}</span>
          </div>
        </div>
        <div className={"box d"}>
        <div className={"s"}>
            <span className={"s-label"}>A full-time contract</span>
            <span>{degree} dgree</span>
            <span className={"s-value"}>{studyCommitmentText}</span>
          </div>
        </div>
      </div> 

      <style jsx>{`
        .wrapper {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-template-rows: repeat(5, 1fr);
          grid-column-gap: 10px;
          grid-row-gap: 10px;
          margin-top: 2rem;
          }

          .box {
            border: solid 1px ${colors.stroke};
            border-radius: 5px;
            padding: 1.5rem
          }
          
          .a { 
              grid-area: 1 / 1 / 6 / 3;
              display: flex;
              flex-direction: column;
              gap: 50px;
          }

          .b { grid-area: 1 / 3 / 4 / 5;}

          .c { grid-area: 1 / 5 / 4 / 7;}
          .d { grid-area: 4 / 3 / 6 / 7;} 

          .info {
            display: flex;
            flex-direction: column;
            gap: 5px
          }

          .s {
            display: flex;
            flex-direction: column;
            gap: 10px
          }

          .label, .s-label {
            color: ${colors.primary};
            font-size: 1rem;
            font-weight: 500;
          }

          .s-value {
            color: ${colors.grey};
            font-size: 1rem;
          }

          .value {
            font-size: 3rem;
            color: ${colors.grey}
          }

          .item {
            grid-column: 1;
            grid-row: 2;
            background-color: ${colors.grey};
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 0px;
            grid-row-gap: 0px;
          }

          .specifications {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .row1 {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 20px;
          }



      `}</style>
    </>

  )
}


export default ScholarshipDetailsGrid