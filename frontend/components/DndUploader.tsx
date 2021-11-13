import Image from 'next/image';
import styles from './DndUploader.module.css';
import imagePlaceholder from '../public/image.svg';
import Button from './Button';
import { DragEventHandler, useState } from 'react';

const DndUploader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const dragOver: DragEventHandler<HTMLDivElement> = e => {
    e.preventDefault();
  };

  const dragEnter: DragEventHandler<HTMLDivElement> = e => {
    e.preventDefault();
  };

  const dragLeave: DragEventHandler<HTMLDivElement> = e => {
    e.preventDefault();
  };

  const fileDrop: DragEventHandler<HTMLDivElement> = e => {
    e.preventDefault();
    const files = e.dataTransfer?.files;
    console.log({ files });
    if (files.length) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (!validateFile(file)) {
      setErrorMessage('File type not allowed.');
      return;
    }

    setErrorMessage('');
    setSelectedFile(file);
  };

  const validateFile = (file: File) => {
    const validTypes = [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'image/x-icon',
    ];

    return validTypes.indexOf(file.type) != -1;
  };

  return (
    <>
      <div
        className={styles.dropContainer}
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
      >
        <div className={styles.imageWrapper}>
          <Image src={imagePlaceholder} alt='Upload a photo' />
        </div>
        <legend className={styles.legend}>Drag & Drop your image here</legend>
      </div>
      {errorMessage && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
      <span className={styles.or}>Or</span>
      <Button label='Choose a file' action={() => {}} />
    </>
  );
};

export default DndUploader;
