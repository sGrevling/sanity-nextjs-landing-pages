import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
  projectId: 'iidn1jo6',
  dataset: 'production',
  // token: 'sanity-auth-token', // or leave blank to be anonymous user
  useCdn: true // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);



class SanityController {
  getData = (type, fields) => client.fetch(`*[_type == "${type}"] | order(_createdAt asc) [0..10] {${fields}}`, {});

  getArticleSlugs = () =>
    this.getData('article', 'title, slug, preview');

  getArticle = (slug) =>
    client.fetch(`*[_type == "article" && slug.current == "${slug}"][0]`, {});

  imgObjectFor = (
    openGraphImage,
    widthArg,
    heightArg,
    title
  ) => {

    return {
      url: builder
        .image(openGraphImage)
        .width(widthArg ? widthArg : 800)
        .height(heightArg ? heightArg : 600)
        .url(),
        width: widthArg ? widthArg : 800,
      height: heightArg ? heightArg : 600,
      alt: title
    }
  }

}

export default SanityController;
