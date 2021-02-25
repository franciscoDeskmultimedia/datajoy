import HeroOne from '../Heros/HeroOne';
import TwoColTitled from '../TwoColTitled/TwoColTitled';
import TwoColImage from '../TwoColImage/TwoColImage';
import EyeBrowHero from "../Heros/EyeBrowHero";
import FullImage from '../FullImage/FullImage'
import EyebrowTitle from '../EyebrowTitle/EyebrowTitle';
import TwoColPost from '../TwoUpPost/TwoUpPost';
import JustTextHero from '../Heros/JustTextHero';
import CenteredFullImageHero from '../Heros/CenteredFullImageHero';
import TwoColLogos from '../TwoColLogos/TwoColLogos';
import EyeBrowTextCentered from '../EyeBrowTextCentered/EyeBrowTextCentered';

const PageBuilder = (props) => {
    const pageBuilder = props.page;
    const modified = props.modified ? props.modified : '';
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
                    imageAlt={section.image.altText != '' ? section.image.altText : section.image.title}
                    copy={section.copy}
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
                    iconAlt={section.icon ? (section.icon.altText ? section.icon.altText : section.icon.title) : null}
                    iconWidth={section.icon ? section.icon.mediaDetails.width : null}
                    iconHeight={section.icon ? section.icon.mediaDetails.height : null}
                    imageSrc={section.imageContainer.image.mediaItemUrl}
                    imageAlt={section.imageContainer.image.altText != '' ? section.imageContainer.image.altText : section.imageContainer.image.title}
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
                    subtitle={section.textContainer.subtitle}
                    mobileSubtitle={section.textContainer.mobileSubtitle}
                    text={section.textContainer.copy}
                    copy={section.textContainer.copynew}
                    fullImage={section.imageCol.fullImage}
                    bottomImage = {section.imageCol.bottomImage}
                    imageSrc={section.imageCol.image.mediaItemUrl}
                    imageAlt={section.imageCol.image.altText != '' ? section.imageCol.image.altText : section.imageCol.image.title}
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
                    imageAlt={section.image.altText != '' ? section.image.altText : section.image.title}
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
                    imageAlt={section.image.altText != '' ? section.image.altText : section.image.title}
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
                    url={section.url ? section.url.url : null}
                    bgColor={section.backgroundColor}
                    textColor={section.textColor}
                    content={section.content}
                  />
                 
                ) : (
                  ""
                )}
                {/* IF TwoColPost  */}
                {section.fieldGroupName ==
                "page_Pagebuilder_PageBuilder_TwoUpPost" ? (
                  
                  <TwoColPost
                    category={section.post.categories.nodes[0].name}
                    image={section.post.featuredImage.node.mediaItemUrl}
                    imageAlt={section.post.featuredImage.node.altText != '' ? section.post.featuredImage.node.altText : section.post.featuredImage.node.title}
                    title={section.post.title}
                    date={section.post.date}
                    author={section.post.author.node.firstName + ' ' + section.post.author.node.lastName}
                    slug={section.post.slug}
                    readtime={section.post.readTime.readTime}
                  />
                 
                ) : (
                  ""
                )}

                {/* IF Just Text Hero  */}
                {section.fieldGroupName ==
                "page_Pagebuilder_PageBuilder_JustTextHero" ? (
                  
                  <JustTextHero title={section.title} date={modified} />
                 
                ) : (
                  ""
                )}
                {/* IF TextBlock  */}
                {section.fieldGroupName ==
                "page_Pagebuilder_PageBuilder_TextBlock" ? (
                  
                  <div className='w-10/12 px-4 mb-20 lg:px-32 lg:w-8/12'>
                    <div className='textBlock' dangerouslySetInnerHTML={{ __html: section.content}}></div>
                  </div>
                 
                ) : (
                  ""
                )}
                {/* IF Hero Centered full Image  */}
                {section.fieldGroupName ==
                "page_Pagebuilder_PageBuilder_CenteredFullImageHero" ? (
                  
                  <CenteredFullImageHero
                    title={section.title}
                    titleSecondline={section.titleSecondLine}
                    subtitle={section.subtitle}
                    fullImage={section.fullImage}
                    imageSrc={section.image.mediaItemUrl}
                    imageAlt={section.image.altText != '' ? section.image.altText : section.image.title}
                    imageWidth={section.image.mediaDetails.width}
                    imageHeight={section.image.mediaDetails.height}
                  />
                 
                ) : (
                  ""
                )}
                {/* IF Hero Centered full Image  */}
                {section.fieldGroupName ==
                "page_Pagebuilder_PageBuilder_TwoColLogos" ? (
                  
                  <TwoColLogos
                    title={section.title}
                    logos={section.logos}
                  />
                 
                ) : (
                  ""
                )}
                {/* IF Eyebrow centered text  */}
                {section.fieldGroupName ==
                "page_Pagebuilder_PageBuilder_EyebrowTextCentered" ? (
                  
                  <EyeBrowTextCentered
                    title={section.title}
                    eyebrow={section.eyebrow}
                    backgroundColor={section.backgroundColor}
                    textColor={section.textColor}
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