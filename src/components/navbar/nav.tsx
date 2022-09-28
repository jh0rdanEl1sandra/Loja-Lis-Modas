import styles from '../../styles/Home.module.css';

import type { NextPage } from 'next';

import Link from 'next/link';

const Nav: NextPage = () => {
  return (
    <nav>
      <h1 className={styles.lis}>LiS</h1>
      <p className={styles.modInt}>Moda Intima</p>
      <div className={styles.BTnav}>
        <button className={styles.btPag}>
          <Link href="../loja">Home</Link>
        </button>
        <div className={styles.btPagContDiv}>
          <button className={styles.btPagCont}>
            Contato
            <div className={styles.ocultHover}>
              <p>Siga-nos</p>
              <image>INSTA</image>
              <p>Converse Conosco</p>
              <image>ZAP</image>
            </div>
          </button>
        </div>
        <div className={styles.logo}></div>
        <button className={styles.btPagExt}>Sexshop</button>
        <button className={styles.btPagExt}>Blog</button>
      </div>
      <h1 className={styles.lg}>Login</h1>
    </nav>
  );
};

export default Nav;
