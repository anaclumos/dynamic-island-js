import Head from 'next/head'
import DynamicIsland from '../components/DynamicIsland'
import Header from '../components/Header'

const index = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <meta name='description' content='Generated by create next app' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Header />
    <h1 className='py-1 my-6 text-3xl font-bold text-slate-900 dark:text-white'>Dynamic Island</h1>
    <p className='py-1 text-base font-medium text-slate-900 dark:text-white'>
      Lorem non dolor quis exercitation cupidatat incididunt ex id sint consectetur magna esse. Anim officia anim ad.
      Fugiat velit consequat tempor dolore veniam labore. Officia reprehenderit amet eu in consequat amet eu elit.
    </p>
    <DynamicIsland />
  </>
)

export default index
