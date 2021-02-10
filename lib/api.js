const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}
export async function getAllCategories() {
  const data = await fetchAPI(
    `
  query allCategories {
    categories {
      nodes {
        id
        name
      }
    }
  }
  `,
    { variables: {} }
  );
  return data;
}
export async function getAllPosts() {
  const data = await fetchAPI(
    `query allPosts {
    posts(first:500) {
      nodes {
        id
        title(format: RAW)
        featuredArticle{
          featuredArticle
        }
        readTime {
          readTime
        }
        popularArticle {
          popularArticle
        }
        categories {
          nodes {
            name
          }
        }
        author {
          node {
            firstName
            lastName
          }
        }
        date
        featuredImage {
          node {
            altText
            mediaDetails {
              height
              width
            }
            mediaItemUrl
          }
        }
        slug
        thumbImage {
          thumbImage {
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }`,
    { variables: {} }
  );

  return data;
}

export async function getPageBuilder(slug, preview, previewData) {
  const postPreview = preview && previewData?.post;
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId ? Number(slug) === postPreview.id : slug === postPreview.slug;
  const isDraft = isSamePost && postPreview?.status === "draft";
  const isRevision = isSamePost && postPreview?.status === "publish";
  const data = await fetchAPI(
    `
    query MyQuery($id: ID! , $idType: PageIdType!)  {
        page(id: $id, idType: $idType) {
            status
            title
            seo {
              breadcrumbs {
                text
                url
              }
              canonical
              metaKeywords
              metaDesc
              metaRobotsNofollow
              metaRobotsNoindex
              schema {
                raw
              }
              title
            }
            slug
            modified
            pageBuilder {
              pageBuilder {
                ... on Page_Pagebuilder_PageBuilder_HomeHero {
                  subtitle
                  title
                  copy
                  image {
                    mediaItemUrl
                    mediaDetails {
                      height
                      width
                    }
                  }
                  fieldGroupName
                }
                ... on Page_Pagebuilder_PageBuilder_TwoUpWithTitle {
                  fieldGroupName
          title
          icon {
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
          backgroundColor
          reverse
          textColor
          imageContainer {
            image {
              altText
              mediaItemUrl
              mediaDetails {
                height
                width
              }
            }
          }
          textContainer {
            copy
            title
            cta {
              textColor
              buttonColor
              cta {
                url
                title
              }
            }
          }
                }
                ... on Page_Pagebuilder_PageBuilder_TwoCol {
                  fieldGroupName
                  reverse
                  imageCol {
                    fullImage
                    backgroundColor
                    image {
                      mediaItemUrl
                      mediaDetails {
                        height
                        width
                      }
                    }
                    bottomImage
                  }
                  textContainer {
                    title
                    copy
                    cta {
                      backgroundColor
                      buttonText {
                        title
                        url
                      }
                    }
                    social
                    socialIcons {
                      linkedin {
                        url
                      }
                      twitter {
                        url
                      }
                    }
                    subtitle
                    mobileSubtitle
                  }
                }
                ... on Page_Pagebuilder_PageBuilder_EyebrowHero {
                  fieldGroupName
                  eyebrow
                  title
                  image {
                    altText
                    mediaItemUrl
                    mediaDetails {
                      height
                      width
                      sizes {
                        sourceUrl
                        height
                        width
                      }
                    }
                  }
                }
                ... on Page_Pagebuilder_PageBuilder_FullImage {
                  fieldGroupName
                  image {
                    altText
                    mediaItemUrl
                  }
                  focalPosition
                }
                ... on Page_Pagebuilder_PageBuilder_EyebrowTitle {
                  fieldGroupName
                  eyebrow
                  likedTitle
                  title
                  url {
                    url
                  }
                  backgroundColor
                  textColor
                  content
                }
                ... on Page_Pagebuilder_PageBuilder_TwoUpPost {
                  fieldGroupName
                  post {
                    ... on Post {
                      id
                      slug
                      title
                      featuredArticle{
                        featuredArticle
                      }
                      readTime{
                        readTime
                      }
                      categories {
                        nodes {
                          name
                        }
                      }
                      featuredImage {
                        node {
                          altText
                          mediaDetails {
                            width
                            height
                          }
                          mediaItemUrl
                        }
                      }
                      author {
                        node {
                          firstName
                          lastName
                        }
                      }
                      date
                    }
                  }
                }
                ... on Page_Pagebuilder_PageBuilder_JustTextHero {
                  fieldGroupName
                  title
                }
                ... on Page_Pagebuilder_PageBuilder_TextBlock {
                  fieldGroupName
                  content
                }
                ... on Page_Pagebuilder_PageBuilder_CenteredFullImageHero {
                  fieldGroupName
                  subtitle
                  title
                  image {
                    mediaItemUrl
                    mediaDetails {
                      height
                      width
                    }
                  }
                  fullImage
                }
                ... on Page_Pagebuilder_PageBuilder_TwoColLogos {
                  fieldGroupName
                  title
                  logos {
                    logoImage {
                      mediaItemUrl
                      mediaDetails {
                        width
                        height
                      }
                    }
                  }
                }
                ... on Page_Pagebuilder_PageBuilder_EyebrowTextCentered {
                  backgroundColor
                  eyebrow
                  textColor
                  fieldGroupName
                  title
                }
              }
            }
          }
      }
    `,
    {
      variables: {
        "id": isDraft ? postPreview.id : `${slug}`,
        "idType": isDraft ? 'DATABASE_ID' : 'URI',
      }
    }
  );
  return data;
}
export async function getSinglePost(slug, preview, previewData) {
  const postPreview = preview && previewData?.post;
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId ? Number(slug) === postPreview.id : slug === postPreview.slug;
  const isDraft = isSamePost && postPreview?.status === "draft";
  const isRevision = isSamePost && postPreview?.status === "publish";
  const data = await fetchAPI(
    `
  query post($id: ID! , $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      status
      id
      blogBuilder {
        blogBuilder {
          ... on Post_Blogbuilder_BlogBuilder_Content {
            content
            fieldGroupName
          }
        }
      }
      featuredImage {
        node {
          altText
          mediaItemUrl
          mediaDetails {
            height
            width
          }
          title(format: RAW)
        }
      }
      author {
        node {
          firstName
          lastName
        }
      }
      date
      readTime {
        readTime
      }
      title
      categories {
        nodes {
          name
        }
      }
      slug
    }
  }`,
    {  
      variables: {
        "id": isDraft ? postPreview.id : `${slug}`,
        "idType": isDraft ? 'DATABASE_ID' : 'SLUG',
      } 
    }
  );
  return data;
}

export async function getPreviewPost(id, idType) {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
        title
        contentType {
          node {
            name
          }
        }
      }
    }`,
    {
      variables: { 
        "id" : id,
        "idType" : idType 
      },
    }
  );
  return data.post;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.posts;
}

export async function getAllPagesWithSlug() {
  const data = await fetchAPI(`
    {
      pages(first:10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.pages;
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.posts;
}

export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post;
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug;
  const isDraft = isSamePost && postPreview?.status === "draft";
  const isRevision = isSamePost && postPreview?.status === "publish";
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ""
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? "DATABASE_ID" : "SLUG",
      },
    }
  );

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id;
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node;

    if (revision) Object.assign(data.post, revision);
    delete data.post.revisions;
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug);
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop();

  return data;
}
