import Head from "next/head";
import styles from "../styles/Home.module.css";

import Image from "next/image";
import Link from "next/link";
import HeroOne from "../components/Heros/HeroOne";
import TwoColTitled from "../components/TwoColTitled/TwoColTitled";
import TwoColImage from "../components/TwoColImage/TwoColImage";

import Navigation from "../components/Navigation/Navigation";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Datajoy</title>
        <link rel="icon" href="/datajoy-favicon.png" />

        {/* Poppins font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <Navigation />
      </div>
      <main>
        <HeroOne
          title="Grow ARR faster"
          subtitle="Start optimizing your SaaS revenue funnel in days."
          imageSrc="/home_IMG_HERO.jpg"
          imageWidth="1110"
          imageHeight="540"
        />
        <TwoColTitled
          title="Optimize your revenue funnel"
          copy="The #1 way to increase the value of your SaaS business is by growing ARR faster, more efficiently and repeatedly. Datajoy optimizes your revenue funnel by making it simple to identify bottlenecks, anomalies and opportunities using our purpose-built ML for SaaS. This gives you the insights to increase LTV toCAC ration, grow net new revenue retention and maximize gross margin."
          iconSrc="/orangeTriangle.png"
          iconWidth="65"
          iconHeight="54"
          imageSrc="/home_IMG_01.jpg"
          imageWidth="445"
          imageHeight="445"
        />
        <TwoColImage
          title="Single source of truth for end to end SaaS metrics"
          text="Datajoy joins and cleans data that exists in your marketing, sales, product, success and financial data silos to create one high speed and accurate data warehouse optimized for exploration and fast queries. Since we map all upstream drivers we can tell you why KPIs are changing so you can get to the root cause and make course corrections."
          imageSrc="/home_IMG_02.png"
          reverse={false}
        />
        <TwoColImage
          title="Answering the why"
          text="Datajoy utilizes AI to map the relationship of all your KPIs and their key downstream and upstream drivers so you know why KPIs are changing so you can get to the root cause and make course corrections faster."
          fullImage={true}
          imageSrc="/home_IMG_03.jpg"
          reverse={true}
        />
        <TwoColImage
          title="Anomaly detection"
          text="We identify anomalies in metrics that have high influence in correlation and magnitude to the key metrics you care about. Let’s face it, things break, things change and behaviors evolve. Be alerted of these key events so you can make informed changes faster so you can blow out the quarter."
          imageSrc="/home_IMG_04.png"
          reverse={false}
        />
        <Link href="/[slug]" as="sample-page">
          <a>Sample Page</a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
