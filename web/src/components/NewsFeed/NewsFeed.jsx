import React, {useState, useEffect} from 'react';
import {NewsItem} from "./NewsItem";

const NewsFeed = (props) => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    props.sanityController.getArticleSlugs()
      .then(articles => {
        setArticles(articles);
      })
  },[]);
  return (
    <section className="newsFeed">
      {
        articles ? (
        articles.map(article => (
          <NewsItem
            key={`article_${article.slug.current}`}
            article={article}
            sanityController={props.sanityController}
          />
          )
        )
      ) : '...'}
    </section>
  );
};

export default NewsFeed;
