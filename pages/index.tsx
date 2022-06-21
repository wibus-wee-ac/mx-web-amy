import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { apiClient } from '../utils'
import { omit } from 'lodash-es'

const Home: NextPage<any> = (props) => {
  return (
    <main>
      
    </main>
  )
}

Home.getInitialProps = async () => {
  const aggregateData = await apiClient.aggregate.getTop()

  return omit(aggregateData, ['says']) as any
}

export default Home
