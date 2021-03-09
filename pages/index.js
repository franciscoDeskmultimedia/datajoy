// import styles from "../styles/Home.module.css";

import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import { NextSeo } from 'next-seo';

import { getPageBuilder } from "../lib/api";
import PageBuilder from "../components/PageBuilder/PageBuilder";
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
        <meta httpEquiv="Content-type" content="text/html; charSet=UTF-8" />
        {/* Poppins font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-187967999-1"></script>
        <script dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'UA-187967999-1');`
            }}>
          
        </script>
      </Head>
      <NextSeo 
          title={pageSeo.title}
          description={pageSeo.metaDesc}
          canonical={pageSeo.canonical}
         />
      <Navigation />
      <PageBuilder page={pageBuilder} modified={modified}/>

      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  
  const page = await getPageBuilder('home', context.preview = false , context.previewData);

  return {
    props: {
      page
    },
    revalidate: 1,
  }
}


