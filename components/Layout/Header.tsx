import Link from 'next/link'
import colors from '../../core/theme/colors'

const Header = () => {

  return (
    <div className={'header'}>
      <div>
        <Link href="/">
          <h4>Harbour.Space</h4>
        </Link>
      </div>
      <div>
        <Link href="/about">
          <h4>About</h4>
        </Link>
      </div>


      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 40px 12px 20px;
          background: ${colors.primary};
          position:fixed;
          top:0;
          width:100%;
          z-index:100;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }

          h4 {
            color: ${colors.white};
            font-weight: 500;
          }
      `}</style>
    </div>
  )
}

export default Header