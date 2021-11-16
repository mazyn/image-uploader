import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { MdCheckCircle } from 'react-icons/md';

import DndUploader from '../components/DndUploader';
import FileUploaderButton from '../components/FileUploaderButton';
import LoaderBar from '../components/LoaderBar';
import styles from '../styles/Home.module.css';
import { validateFile } from '../utils/FileValidation';

const Home: NextPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [uploading, setUploading] = useState(false);
  const [imagePath, setImagePath] = useState('');

  const handleImageUpload = (file: File) => {
    setUploading(true);

    const body = new FormData();

    body.append('file', file);

    fetch('/api/upload', {
      method: 'POST',
      body,
    }).then(() => {
      setImagePath(`/upload/${file.name}`);
      setUploading(false);
    });
  };

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
        {!uploading && !imagePath && (
          <div className={styles.card}>
            <h2>Upload your image</h2>
            <p>File should be Jpeg, Png,...</p>
            <DndUploader
              setSelectedFile={handleImageUpload}
              validateFile={validateFile}
              handleErrorMessage={setErrorMessage}
            />
            {errorMessage && (
              <span className={styles.errorMessage}>{errorMessage}</span>
            )}
            <span className={styles.or}>Or</span>
            <FileUploaderButton
              handleFile={handleImageUpload}
              validateFile={validateFile}
              handleErrorMessage={setErrorMessage}
            />
          </div>
        )}

        {uploading && !imagePath && (
          <div className={styles.card}>
            <div className={styles.uploadingWrapper}>
              <span className={styles.uploadingText}>Uploading...</span>
              <div style={{ margin: '1.5rem 0 0.5rem' }}>
                <LoaderBar />
              </div>
            </div>
          </div>
        )}

        {!uploading && imagePath && (
          <div className={styles.card}>
            <div>
              <MdCheckCircle color='#219653' size='42' />
            </div>
            <span className={styles.successText}>Uploaded Successfully!</span>
            <div className={styles.imageUploadedWrapper}>
              <Image
                src={imagePath}
                layout='fill'
                alt='Uploaded picture'
                blurDataURL='true'
              />
            </div>
          </div>
        )}
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
  );
};

export default Home;
