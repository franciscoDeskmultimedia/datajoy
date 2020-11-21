import HeroOne from '../Heros/HeroOne';
import TwoColTitled from '../TwoColTitled/TwoColTitled';
import TwoColImage from '../TwoColImage/TwoColImage';
import EyeBrowHero from "../Heros/EyeBrowHero";
import FullImage from '../FullImage/FullImage'
import EyebrowTitle from '../EyebrowTitle/EyebrowTitle';
const PageBuilder = (props) => {
    const pageBuilder = props.page;
    return (
        pageBuilder.map((section, index) => {
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
                    social={section.textContainer.social}
                    socialIcons={section.textContainer.socialIcons}
                  />
                 
                ) : (
                  ""
                )}
                {/* IF EyebrowHero  */}
                {section.fieldGroupName ==
                "page_Pagebuilder_PageBuilder_EyebrowHero" ? (
                  
                  <EyeBrowHero
                    eyebrow={section.eyebrow}
                    title={section.title}
                    image={section.image.mediaItemUrl}
                    imageWidth={section.image.mediaDetails.width}
                    imageHeight={section.image.mediaDetails.height}
                  />
                 
                ) : (
                  ""
                )}
                {/* IF FullImage  */}
                {section.fieldGroupName ==
                "page_Pagebuilder_PageBuilder_FullImage" ? (
                  
                  <FullImage
                    image={section.image.mediaItemUrl}
                  />
                 
                ) : (
                  ""
                )}
                {/* IF Eyebrow title  */}
                {section.fieldGroupName ==
                "page_Pagebuilder_PageBuilder_EyebrowTitle" ? (
                  
                  <EyebrowTitle
                    eyebrow={section.eyebrow}
                    title={section.title}
                    linkedTitle={section.likedTitle}
                    url={section.url.url}
                    bgColor={section.backgroundColor}
                    textColor={section.textColor}
                    content={section.content}
                  />
                 
                ) : (
                  ""
                )}
    
              </div>
            );
          })
    )
}

export default PageBuilder