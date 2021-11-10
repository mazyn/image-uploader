import Image from 'next/image'
import styles from './DndUploader.module.css'
import imagePlaceholder from '../public/image.svg'
import Button from './Button'

const DndUploader: React.FC = () => {
  return (
    <>
      <div className={styles.dndContainer}>
        <div className={styles.imageWrapper}>
          <Image src={imagePlaceholder} alt='Upload a photo' />
        </div>
        <legend className={styles.legend}>Drag & Drop your image here</legend>
      </div>
      <span className={styles.or}>Or</span>
      <Button label='Choose a file' action={() => {}} />
    </>
  )
}

export default DndUploader
