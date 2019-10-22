import React from 'react';
import NewsFeed from "../NewsFeed/NewsFeed";
import { PrimaryButton } from '@sb1/ffe-buttons-react';

export const MainPage = (props) => (
    <div className="mainPage">
      <PrimaryButton onClick={f => f}>PrimaryButton</PrimaryButton>
      <NewsFeed
        sanityController={props.sanityController}
      />
    </div>
);
