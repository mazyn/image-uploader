import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import DndUploader from '../components/DndUploader'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mazyn&apos;s Image Uploader</title>
        <meta
          name='description'
          content="My take on Devchallenges' Image Uploader challenge"
        />
        <link rel='icon' href='/devchallenges.png' />
      </Head>

      <main className={styles.main}>
        <div className={styles.card}>
          <h2>Upload your image</h2>
          <p>File should be Jpeg, Png,...</p>
          <DndUploader />
        </div>
      </main>

      <footer className={styles.footer}>
        <span>
          created by{' '}
          <a
            href='https://github.com/mazyn'
            target='_blank'
            rel='noopener noreferrer'
          >
            mazyn
          </a>{' '}
          - devChallenges.io
        </span>
      </footer>
    </div>
  )
}

export default Home
