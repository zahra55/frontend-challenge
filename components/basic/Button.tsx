import colors from '../../core/theme/colors'


type Props = {
  onClick?: () => void
  label: string
} & import('react').HTMLAttributes<HTMLDivElement>

const Button: import('react').FC<Props> = ({ label, onClick, children }) => {
  return (
    <>
      <button className="button" role="button" onClick={onClick}>{label}</button>


      <style jsx>{`
          .button {
            all: unset;
            width: 100px;
            height: 30px;
            font-size: 16px;
            background: transparent;
            border: none;
            position: relative;
            color: #f0f0f0;
            cursor: pointer;
            z-index: 1;
            padding: 10px 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            white-space: nowrap;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
          }
          
          .button::after,
          .button::before {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            z-index: -99999;
            transition: all .4s;
          }
          
          .button::before {
            transform: translate(0%, 0%);
            width: 100%;
            height: 100%;
            background: ${colors.primary};
            border-radius: 10px;
          }
          
          .button::after {
            transform: translate(10px, 10px);
            width: 35px;
            height: 35px;
            background: #ffffff15;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border-radius: 50px;
          }
          
          .button:hover::before {
            transform: translate(5%, 20%);
            width: 110%;
            height: 110%;
          }
          
          .button:hover::after {
            border-radius: 10px;
            transform: translate(0, 0);
            width: 100%;
            height: 100%;
          }
          
          .button:active::after {
            transition: 0s;
            transform: translate(0, 5%);
          }

      `}</style>
    </>
    
  )
}

export default Button;