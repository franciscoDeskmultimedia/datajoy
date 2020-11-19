import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import HeroOne from "../components/Heros/HeroOne";
import TwoColTitled from "../components/TwoColTitled/TwoColTitled";
import TwoColImage from "../components/TwoColImage/TwoColImage"
import {getPageBuilder} from '../lib/api'

const PageBuilder = ({ page, draftData }) => {
  console.log(page);
  console.log('dataDraft' + draftData);
  const pageBuilder = page.pageBy.pageBuilder.pageBuilder;
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
      {pageBuilder.map((section, index) => {
        return (
          <div key={index}>
            {/* IF Hero Section */}
            {section.fieldGroupName ==
            "page_Pagebuilder_PageBuilder_HomeHero" ? (
              
              <HeroOne
                title={section.title}
                subtitle={section.subtitle}
                imageSrc={section.image.mediaItemUrl}
                imageWidth={section.image.mediaDetails.width}
                imageHeight={section.image.mediaDetails.height}
              />
              
            ) : (
              ""
            )}
            {/* IF TWO col Titled */}
            {section.fieldGroupName ==
            "page_Pagebuilder_PageBuilder_TwoUpWithTitle" ? (
              
              <TwoColTitled 
                bgColor={section.backgroundColor}
                textColor={section.textColor}
                reverse={section.reverse}
                title={section.title}
                copy={section.textContainer.copy}
                iconSrc={section.icon ? section.icon.mediaItemUrl : null}
                iconWidth={section.icon ? section.icon.mediaDetails.width : null}
                iconHeight={section.icon ? section.icon.mediaDetails.height : null}
                imageSrc={section.imageContainer.image.mediaItemUrl}
                imageWidth={section.imageContainer.image.mediaDetails.width}
                imageHeight={section.imageContainer.image.mediaDetails.height}
                ctaName={section.textContainer.cta ? section.textContainer.cta[0].cta.title : null }
                ctaUrl={section.textContainer.cta ? section.textContainer.cta[0].cta.url : null}
                ctaBgColor={section.textContainer.cta ? section.textContainer.cta[0].buttonColor : null}
                ctaTextColor={section.textContainer.cta ? section.textContainer.cta[0].textColor : null}
              />
              
            ) : (
              ""
            )}
            {/* IF TWO col  */}
            {section.fieldGroupName ==
            "page_Pagebuilder_PageBuilder_TwoCol" ? (
              
              <TwoColImage 
                title={section.textContainer.title}
                text={section.textContainer.copy}
                fullImage={section.imageCol.fullImage}
                imageSrc={section.imageCol.image.mediaItemUrl}
                imageWidth={section.imageCol.image.mediaDetails.width}
                imageHeight={section.imageCol.image.mediaDetails.height}
                backgroundColor={section.imageCol.backgroundColor}
                reverse={section.reverse}
                ctaBgColor={section.textContainer.cta ? section.textContainer.cta[0].backgroundColor : null}
                ctaName={section.textContainer.cta ? section.textContainer.cta[0].buttonText.title : null}
                ctaUrl={section.textContainer.cta ? section.textContainer.cta[0].buttonText.url : null}
              />
             
            ) : (
              ""
            )}

          </div>
        );
      })}
    </>
  );
};

export default PageBuilder;

export async function getServerSideProps(context) {
  const page = await getPageBuilder(context.params.slug);
  const draftData = context.preview;
  return {
    props: { 
      page,
      draftData
     },
  }
}
