import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import { NextSeo } from 'next-seo';


import { getPageBuilder } from "../lib/api";
import PageBuilder from "../components/PageBuilder/PageBuilder";
import Footer from "../components/Footer/Footer";

const PageBuilderContent = ({ page, draftData, previewDatas, theparams }) => {
  const pageBuilder = page.page != null ? page.page.pageBuilder.pageBuilder : "";
  const modified = page.status != 'publish' ? new Date()  : page.page.modified;
  const draft = draftData ? draftData.post.status : null ;
  const pageSeo = page.page != null ? page.page.seo : '';

  return (
    <>
      <Head>
        <title>Datajoy</title>
        <link rel="icon" href="/datajoy-favicon.png" />
        <meta name="keywords" content={pageSeo.metaKeywords} />
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
      {page.page != null ? (
        page.page.status == "publish" || draft  ? (
          <PageBuilder page={pageBuilder} modified={modified}/>
        ) : (
          <div className="flex flex-wrap items-center justify-center px-4 py-20 lg:px-32">
            <h1 className="text-center">Page under construction</h1>
          </div>
        )
      ) : (
        <div className="flex flex-wrap items-center justify-center px-4 py-20 lg:px-32">
          <h2 className="w-full text-center">Page doesnt exist</h2>
        </div>
      )}

      <Footer></Footer>
    </>
  );
};

export default PageBuilderContent;

export async function getServerSideProps({params, preview = false, previewData}) {
  const page = await getPageBuilder(params.slug , previewData ? true : false, previewData);
  const draftData = previewData ? previewData : null;
  const previewDatas = previewData ? previewData : null;
  const theparams = params;
  return {
    props: {
      page,
      draftData,
      previewDatas,
      theparams
    },
  };
}


