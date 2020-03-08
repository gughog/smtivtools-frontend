import React from 'react';
import styles from './Home.module.css';

const Home: React.FC = () => (
  <main className={styles.home_container}>
    <section className={styles.home__mainScreen}>
      Main Screen
    </section>

    <section className={styles.home__resultScreen}>
      Results screen
    </section>
  </main>
);

export default Home;
