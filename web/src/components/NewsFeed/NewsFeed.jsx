import React, {useState, useEffect} from 'react';

const NewsFeed = (props) => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    props.sanityController.getArticleSlugs()
      .then(articles => {
        console.log(articles);
      })
  },[]);

  return (
    <section className="newsFeed">
      <button
        onClick={() => setArticles('success')}
      >
        Hello
      </button>
      {articles ? articles : 'no'}
    </section>
  );
};

export default NewsFeed;
