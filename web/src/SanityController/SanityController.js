import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'e2eaoqww',
  dataset: 'production',
  // token: 'sanity-auth-token', // or leave blank to be anonymous user
  useCdn: true // `false` if you want to ensure fresh data
});


class SanityController {

  // componentDidMount() {
  //   this.getData('page', 'title, content, description, openGraphImage');
  // }

  getData = (type, fields) => client.fetch(`*[_type == "${type}"] {${fields}}`, {});

  getArticleSlugs = () =>
    this.getData('article', 'title, slug');

  getArticle = (slug) => {

  };

}

export default SanityController;
