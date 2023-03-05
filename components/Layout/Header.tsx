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
          background: ${colors.primary};
          padding: 12px 40px 12px 20px;
          z-index: 12;
          position: -webkit-sticky;
          position: sticky;
          top: 0;
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