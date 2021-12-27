import Head from 'next/head'
import Login from '../components/login'

export default function Home() {
  const isAuthenticated = false;

  if (isAuthenticated != true) return <Login />;

  return (
    <div className="">
      <Head>
        <title>Metaverse Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcome to the metaverse playground</h1>

      

    </div>
  )
}
