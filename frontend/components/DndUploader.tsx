import Image from 'next/image';
import styles from './DndUploader.module.css';
import imagePlaceholder from '../public/image.svg';
import { DragEventHandler } from 'react';

interface Props {
  setSelectedFile: (file: File) => void;
  handleErrorMessage: (err: string) => void;
  validateFile: (file: File) => boolean;
}

const DndUploader: React.FC<Props> = ({
  setSelectedFile,
  handleErrorMessage,
  validateFile,
}) => {
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

    if (files.length) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (!validateFile(file)) {
      handleErrorMessage('File type not allowed.');
      return;
    }

    handleErrorMessage('');
    setSelectedFile(file);
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
    </>
  );
};

export default DndUploader;
