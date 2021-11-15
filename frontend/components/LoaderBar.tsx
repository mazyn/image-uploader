import styles from './LoaderBar.module.css';

const LoaderBar: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderBar} />
    </div>
  );
};

export default LoaderBar;
