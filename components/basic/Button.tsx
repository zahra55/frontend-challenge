import colors from '../../core/theme/colors'


type Props = {
  onClick?: () => void
  title: string
} & import('react').HTMLAttributes<HTMLDivElement>

const Button: import('react').FC<Props> = ({ title, onClick, children }) => {
  return (
    <>
      <button className={"button"} onClick={onClick}>
        <span className={"title"}>{title}</span>
      </button>

      <style jsx>{`
          .button {
            background-color: ${colors.primary};
            padding: 16px 40px;
            border-radius: 80px;
            border: 0;
          }
          .title {
            color: ${colors.white};
            font-size: 1rem;
            font-weight: 500;
          }
      `}</style>
    </>
    
  )
}

export default Button;