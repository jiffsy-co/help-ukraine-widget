import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import { useSeo } from "../hooks/seo";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const seo = useSeo();
  return (
    <div className={styles.container}>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Help Ukraine Win widget</h1>

        <p className={styles.description}>Installation instructions</p>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
