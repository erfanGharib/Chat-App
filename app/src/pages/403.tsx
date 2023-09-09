import Head from 'next/head'
import Link from 'next/link'

export default function PermissionDenied() {
  return (
    <>
      <Head>
        <title>403 error</title>
        <meta name="description" content="403 error page" />
      </Head>
      <div className='m-5 flex-col flex'>
        <h1>403</h1>
        <p>Sorry, You have not permission to access this page</p>
        <Link href='/' className='w-max-content p-2 mt-2 primary-btn'>home</Link>
      </div>
    </>
  )
}
