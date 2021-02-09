import styles from "../styles/Home.module.css";

import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import { NextSeo } from 'next-seo';

// import HeroOne from "../components/Heros/HeroOne";
// import TwoColTitled from "../components/TwoColTitled/TwoColTitled";
// import TwoColImage from "../components/TwoColImage/TwoColImage"
// import EyeBrowHero from "../components/Heros/EyeBrowHero";
import { getPageBuilder } from "../lib/api";
import PageBuilder from "../components/PageBuilder/PageBuilder";
import GetDemoModal from '../components/GetDemoModal/GetDemoModal'
import Footer from "../components/Footer/Footer";


export default function Home({ page }) {
  const pageBuilder = page ? page.page.pageBuilder.pageBuilder : null;
  const modified = page ? page.page.modified : null;
  const pageSeo = page.page != null ? page.page.seo : '';

  return (
    <>
      <Head>
        <title>Datajoy</title>
        <link rel="icon" href="/datajoy-favicon.png" />
        <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
        {/* Poppins font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
                <code snippet goes here>
              `,
          }}
        /> */}
      </Head>
      <NextSeo 
          title={pageSeo.title}
          description={pageSeo.metaDesc}
          canonical={pageSeo.canonical}
         />
      <Navigation />
      <PageBuilder page={pageBuilder} modified={modified}/>
      
      {/* <GetDemoModal/> */}
      <Footer />
    </>
  );
}

// export async function getServerSideProps({params, preview = false, previewData}) {
//   const page = await getPageBuilder('home', preview, previewData);
//   const draftData = previewData ? previewData : null;
//   // const previewData = context.previewData;
//   return {
//     props: {
//       page,
//       draftData,
//       // previewData
//     },
//   };
// }

export async function getStaticProps(context) {
  const page = await getPageBuilder('home', context.preview = false , context.previewData);
  const draftData = context.previewData ? context.previewData.slug : null ;

  return {
    props: {
      page,
      draftData,
    },
    revalidate: 1,
  }
}


