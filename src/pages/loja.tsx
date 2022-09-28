import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Nav from '../components/navbar/nav';

const Loja: NextPage = () => {
  return (
    <main>
      <Nav />
      <div className={styles.container}>
        <div className={styles.contentPromotion}>
          <div className={styles.btn}>
            <button className={styles.adcPromotion}>
              <h1>+</h1>
              <p>Adicionar Promoção</p>
            </button>
          </div>
        </div>
        <div className={styles.item}>
          <button className={styles.btLoj}>Blusinhas</button>
        </div>
        <div className={styles.item}>
          <button className={styles.btLoj}>Conjuntos</button>
        </div>
        <div className={styles.item}>
          <button className={styles.btLoj}>Sutiãs</button>
        </div>
        <div className={styles.item}>
          <button className={styles.btLoj}>Calcinhas</button>
        </div>
        <div className={styles.item}>
          <button className={styles.btLoj}>Cuecas</button>
        </div>
      </div>
    </main>
  );
};

export default Loja;
