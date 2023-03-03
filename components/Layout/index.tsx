
import Head from 'next/head'
import Header from './Header'

type Props =  {
  title: string | false
  invertTitle?: boolean
  description: string | undefined 
} & import('react').HTMLAttributes<HTMLDivElement>

const Layout: import('react').FC<Props> = ({title, invertTitle, description, children}) => {

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.svg" />
          <title>{title ? (invertTitle ? `${title} - Zahra` : `Zahra - ${title}`) : 'Zahra'}</title>
          <meta name="title" content={title || 'Zahra'} />
          <meta name="description" content={description} />
      </Head>
      <Header/>
      <main>{children}</main>
    </>


  )
}

export default Layout