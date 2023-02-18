import Link from "next/link";
import { Event } from "../../interfaces";
import styles from "../../styles/event.module.sass";
import Script from "next/script";
import getEvents from "../../lib/getEvents";

export async function getStaticProps({ params }) {
  const events = await getEvents();
  const event = events.items.filter((res) => res.slug === params.event)[0];
  if (!event) return { notFound: true };

  return {
    props: { event }
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
                window.location.replace("${event.redirect}");
            }
        }, 1000);

          `,
        }}
      ></Script>

      <p id="counter">5</p>
      <h1 className={styles.subtitle}>Redirecting to</h1>
      <Link href={event.redirect}>
        <a className={styles.title}>{event.redirect.replace("https://", "")}</a>
      </Link>
    </div>
  );
};

export async function getStaticPaths() {
  const events = await getEvents();
  return {
    paths: events.items.map((event) => `/event/${event.slug}`),
    fallback: "blocking",
  };
}

export default Event;