import { ChangeEventHandler, useRef } from 'react';
import Button from './Button';
import styles from './FileUploaderButton.module.css';

interface Props {
  handleFile: (file: File) => void;
  validateFile: (file: File) => boolean;
  handleErrorMessage: (err: string) => void;
}

const FileUploaderButton: React.FC<Props> = ({
  handleFile,
  validateFile,
  handleErrorMessage,
}) => {
  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = e => {
    const fileUploaded = e.target.files?.item(0);

    if (!fileUploaded) return;

    if (!validateFile(fileUploaded)) {
      handleErrorMessage('File type not allowed.');
      return;
    }

    handleErrorMessage('');
    handleFile(fileUploaded);
  };

  return (
    <>
      <Button label='Choose a file' action={handleClick} />
      <input
        type='file'
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: 'none' }}
      />
    </>
  );
};

export default FileUploaderButton;
