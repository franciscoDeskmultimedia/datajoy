import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";

import {getPageBuilder} from '../lib/api'
import PageBuilder from '../components/PageBuilder/PageBuilder'

const PageBuilderContent = ({ page, draftData, previewData }) => {
  console.log(page);
  // console.log('dataDraft' + draftData);
  // console.log('preview data : ' + previewData.post.id + ' slug : ' + previewData.post.slug + ' post status: ' + previewData.post.status )
  const pageBuilder = page ? page.pageBy.pageBuilder.pageBuilder : '';
  return (
    <>
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
      <Navigation />
      { page.pageBy.status == 'publish' ||  draftData == true ?
       <PageBuilder page={pageBuilder}/>
      
      : (<h1>Page under construction</h1>)}
      
    </>
  );
};

export default PageBuilderContent;

export async function getServerSideProps(context) {
  const page = await getPageBuilder(context.params.slug);
  const draftData = context.preview ? context.preview : null ;
  // const previewData = context.previewData;
  return {
    props: { 
      page,
      draftData,
      // previewData
     },
  }
}
