import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Nav from '../components/navbar/nav';

export default function Home() {
  return (
    <main>
      <Nav />
      <div className={styles.wallpLis}></div>
      <div className={styles.wallp}></div>
    </main>
  );
}
