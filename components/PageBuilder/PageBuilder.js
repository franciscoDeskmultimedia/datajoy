import HeroOne from '../Heros/HeroOne';
import TwoColTitled from '../TwoColTitled/TwoColTitled';
import TwoColImage from '../TwoColImage/TwoColImage';
import EyeBrowHero from "../Heros/EyeBrowHero";
import FullImage from '../FullImage/FullImage'
import EyebrowTitle from '../EyebrowTitle/EyebrowTitle';
import TwoColPost from '../TwoUpPost/TwoUpPost';
import JustTextHero from '../Heros/JustTextHero'
const PageBuilder = (props) => {
    const pageBuilder = props.page;
    const modified = props.modified;
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
                    subtitle={section.textContainer.subtitle}
                    mobileSubtitle={section.textContainer.mobileSubtitle}
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
                    title={section.post.title}
                    date={section.post.date}
                    author={section.post.author.node.firstName + ' ' + section.post.author.node.lastName}
                    slug={section.post.slug}
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
                    <div dangerouslySetInnerHTML={{ __html: section.content}}></div>
                  </div>
                 
                ) : (
                  ""
                )}
    
              </div>
            );
          })
    )
}

export default PageBuilder