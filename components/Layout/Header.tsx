import colors from '../../core/theme/colors'

const Header = () => {

  return (
    <div className={'header'}>
      <h4>Harbour.Space</h4>
      <h4>More</h4>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: ${colors.primary};
          padding: 12px 14px 12px 14px;
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