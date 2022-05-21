import Link from "next/link";
import Head from "next/head";
import { Event } from "../../interfaces";
import styles from "../../styles/event.module.sass";
import db from "../../utils/deta";
import Script from "next/script";
export async function getServerSideProps({
  params: { event },
}: {
  params: { event: Event };
}) {
  const actualEvent = await (
    await db.fetch()
  ).items.filter((res) => res.slug === event)[0];
  if (actualEvent === undefined) return { notFound: true };
  else
    return {
      props: {
        event: actualEvent,
      },
    };
}

const Event: React.FC<{
  event?: Event;
}> = ({ event }) => {
  return (
    <div className={styles.center}>
      
        <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          setInterval(function() {
            var div = document.querySelector("#counter");
            var count = div.textContent * 1 - 1;
            div.textContent = count;
            if (count <= 0) {
                window.location.replace("${event.link}");
            }
        }, 1000);

          `}}
        ></Script>
      
      <p id="counter">5</p>
      <h1 className={styles.subtitle}>Redirecting to</h1>
      <Link href={event.link}>
        <a className={styles.title}>{event.link.replace("https://", "")}</a>
      </Link>
    </div>
  );
};

// export async function getStaticPaths() {
//   const table = await getAllPosts();
//   return {
//     paths: table.map((row) => `/${row.slug}`),
//     fallback: true,
//   };
// }

export default Event;
