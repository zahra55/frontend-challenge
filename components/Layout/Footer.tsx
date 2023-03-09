import Link from 'next/link'
import colors from '../../core/theme/colors'


type Props = {
  
} & import('react').HTMLAttributes<HTMLDivElement>

const Footer: import('react').FC<Props> = () => {
  // State ------------------------------------------------------------------- //
  
  // Handlers ---------------------------------------------------------------- //

  // Effects ----------------------------------------------------------------- //

  // Rendering --------------------------------------------------------------- //
  return (
    <div className={"container"}>
      <div className={"box a"}>
        <h3>Harbour.Space</h3>
        <Link href={'./about'}>
          <h4>About</h4>
        </Link>
        <Link href={'./about'}>
          <h4>Admission</h4>
        </Link>
        <Link href={'./about'}>
          <h4>Contact</h4>
        </Link>
      </div>
     
      <div className={"box a"}>
        <h3>Follow us</h3>
        <Link href={'./about'}>
          <h4>Twitter</h4>
        </Link>
        <Link href={'./about'}>
          <h4>Instagram</h4>
        </Link>
        <Link href={'./about'}>
          <h4>Facebook</h4>
        </Link>
      </div>

      <div className={"box a"}>
        <h3>Info</h3>
        <Link href={'./about'}>
          <h4>Blog</h4>
        </Link>
        <Link href={'./about'}>
          <h4>FAQ</h4>
        </Link>
        <Link href={'./about'}>
          <h4>Podcast</h4>
        </Link>
      </div>

      <style jsx>{`
        .container {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 33%;
          gap: 10px;
          background-color: #3C227F;
          min-height: 200px;
          padding: 10px 100px;
          margin-top: 150px;
        }

        .box {
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px; 
        }

        h3, h4 {
          color: ${colors.white};

        }

        h4 {
          font-size: 0.875rem;
          font-weight: 300;
        }
      `}</style>
    </div>
  )
}

export default Footer
