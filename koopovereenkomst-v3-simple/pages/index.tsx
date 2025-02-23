import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/index.module.css";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <h1 className={styles.title}>
          Welkom bij de Koopovereenkomst Solid App!
        </h1>

        <p className={styles.description}>
          Start pagina van de Koopovereenkomst Solid App!
          Vanaf deze pagina kan genavigeerd worden naar de verschillende &apos;ingangen&apos; voor de betreffende rollen.
        </p>

        <div className={styles.grid}>
          <Link href="verkoper">
            <a className={styles.card}>
              <h2>Verkoper &rarr;</h2>
              <p>Verkoper start pagina.</p>
            </a>
          </Link>

          <Link href="koper">
            <a className={styles.card}>
              <h2>Koper &rarr;</h2>
              <p>Koper start pagina.</p>
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
