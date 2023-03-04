import { NextComponentType } from "next";
import { useEffect, useState } from "react";
import colors from "../../core/theme/colors";


const CountDown: NextComponentType = () => {

  // State ------------------------------------------------------------------- //
  const [isApplicationActive, setIsApplicationActive] = useState(true)
  const [days, setDayes] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)


  // Effects ----------------------------------------------------------------- //
  useEffect(() => {
    // const target = new Date("10/03/2023 23:59:59")
    const target = new Date("6/03/2023 23:59:59")

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 60 * 24))
      setDayes(d)

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      setHours(h)

      const m = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      )
      setMinutes(m)

      const s = Math.floor(
        (difference % (1000 * 60) / 1000)
      )
      setSeconds(s)

      if(d <= 0 && h <= 0 && m <= 0 && s <= m) {
          setIsApplicationActive(false)
      }
    }, 1000)

    // clear interval when component unmount
    return () => clearInterval(interval)
  }, [])

  return (

    <>
      <div className={"timer-wrapper"}>

        {!isApplicationActive ? <p>Application Closed</p> : 
            <div className={"timer-inner"}>

                <div className={"timer-segment"}>
                  <span className={"time"}>{days}</span>
                  <span className={"label"}>Day</span>
                </div>
                <span className={"divider"}>:</span>
                <div className={"timer-segment"}>
                  <span className={"time"}>{hours}</span>
                  <span className={"label"}>Hrs</span>
                </div>
                <span className={"divider"}>:</span>
                <div className={"timer-segment"}>
                  <span className={"time"}>{minutes}</span>
                  <span className={"label"}>Min</span>
                </div>
                <span className={"divider"}>:</span>
                <div className={"timer-segment"}>
                  <span className={"time"}>{seconds}</span>
                  <span className={"label"}>Sec</span>
                </div>

            </div>
        }

      </div>

        <style jsx>{`
            .timer-wrapper {
              padding: 0.875rem 0;
            }

            .timer-inner {
              display: flex;
            }

            .timer-segment {
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
              gap: 5px;
            }

            .divider, .time {
              font-size: 1.5rem;
            }

            .divider {
              padding: 0 1rem;
            }

            .label {
              font-size: 1.5rem
            }
        `}</style>
    </> 
  )
}

export default CountDown