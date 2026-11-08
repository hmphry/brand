import styles from './App.module.css';
import { Button } from './primitives/Button';

const App = () => {
  return (
    <main className={styles.page}>
      <h1 className={styles.brand}>Brand</h1>
      <div className={styles.actions}>
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
      </div>
    </main>
  );
};

export default App;
