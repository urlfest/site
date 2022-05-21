import Link from "next/link";
import styles from "../styles/contact.module.sass";

const IndexPage = () => (
  <div className={styles.div}>
    <div className={styles.content}>
      <p>
        Please include the Domain you wish to use, a link to more info about
        your URL Fest, as well as if you need the Domain for a GameServer (i.e a
        Minecraft Server) and I will get back to you ASAP
      </p>
      <br />
      <Link href={"mailto:urlfest@lio.cat?subject=%5BURLFE.ST%5D%20Request"}>
        <a className={styles.contact}>urlfest@lio.cat</a>
      </Link>
    </div>
  </div>
);

export default IndexPage;
