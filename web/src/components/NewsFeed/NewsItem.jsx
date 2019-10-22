import React from 'react';
import {Link} from "react-router-dom";
import {renderBlockContent} from "../../SanityController/sanityUtils";
import {formatTimeString} from "../../utils/utils";

export const NewsItem = ({article, sanityController}) => {
  const getImg = () => {
    const {url, width, height} = sanityController.imgObjectFor(article.mainImage, 150, 100);
    return <img
      src={url}
      style={{width, height}}
      alt="articleMainImage"
      className="news-item-picture"
    />
  };

  const url = `/articles/${article.slug.current}`;

  return (
    <div className="news-item">
      <div className="news-item-picture-container">
        <Link
          to={{
            pathname: url,
            state: {
              slug: article.slug.current
            }
          }}
        >
          {getImg()}
        </Link>
      </div>
      <div className="news-item-details-container">
        <div className="news-item-title-container">
          <Link
            className={'news-item-title'}
            to={{
              pathname: url,
              state: {
                slug: article.slug.current
              }
            }}
          >
            {article.title}
          </Link>
        </div>
        <p
          className={'news-item-published-at'}
        >
          {formatTimeString(article.publishedAt)}
        </p>
        <div
          className={'news-item-abstract'}
        >
          {renderBlockContent(article.abstract, 'news-item-abstract')}
        </div>
      </div>
    </div>
  );
};
