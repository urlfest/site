import Link from "next/link";
import styles from "../styles/index.module.sass"

const IndexPage = () => (
  <div className={styles.center}>
    <h1 className={styles.title}>URLFE.ST</h1>
    <p className={styles.tagline}>Link Shortener for URLFests</p>
    <Link href={'/contact'}>
    <a className={styles.subtitle}>CONTACT</a>
    </Link>
  </div>
);

export default IndexPage;
