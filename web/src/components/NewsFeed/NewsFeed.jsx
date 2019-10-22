import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

const NewsFeed = (props) => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    props.sanityController.getArticleSlugs()
      .then(articles => {
        setArticles(articles);
      })
  },[]);

  console.log(articles);

  return (
    <section className="newsFeed">
      {
        articles ? (
        articles.map(article => (
          <Link
            to={{
              pathname: `/articles/${article.slug.current}`,
              state: {
                slug: article.slug.current
              }
            }}
            key={`article_${article.slug.current}`}
            // onClick={() => onArticleListItemClick(article.slug.current)}
          >
            {article.title}
          </Link>
          )
        )
      ) : '...'}
    </section>
  );
};

export default NewsFeed;
