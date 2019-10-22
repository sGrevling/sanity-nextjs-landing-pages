import React, {useEffect, useState} from 'react';
import {renderBlockContent} from "../../SanityController/sanityUtils";
import { Heading2 } from '@sb1/ffe-core-react';

export const Article = (props) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    let slug = props.routing.location.state
      && props.routing.location.state.slug;

    if (!slug)
      slug = props.routing.location.pathname.substr(props.routing.match.path.length);

    props.sanityController.getArticle(slug)
      .then(result => {
          if (result) setArticle(result);
          else
            console.log('No such article');
        },
        error => {
          console.log(error);
        }
      );
  }, []);

  const renderArticleContent = () => (
    <div className="articleContent">
      {getImg()}
      <Heading2>{article.title}</Heading2>
      {renderBlockContent(article.body, 'articleBody')}
    </div>
  );

  const getImg = () => {
    const {url, width, height} = props.sanityController.imgObjectFor(article.mainImage, 800, 600);
    return <img src={url} style={{width, height}} alt="articleMainImage"/>
  };

  return (
    <article className="article">
      {
        article ? renderArticleContent() : (
          <div className="loader"/>
        )
      }
    </article>
  );
};
