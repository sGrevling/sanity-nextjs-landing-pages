import React from 'react';
import NewsFeed from "../NewsFeed/NewsFeed";
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';
import { PrimaryButton } from '@sb1/ffe-buttons-react';
import {Heading1} from "@sb1/ffe-core-react";

export const MainPage = (props) => (
    <div className="mainPage">
      <Grid>

        <GridRow>
          <GridCol sm="12">
            <Heading1
              className={'main-page-heading'}
            >
              Nytt og nyttig
            </Heading1>
          </GridCol>
        </GridRow>
        <GridRow>
          <GridCol sm="9">
            <NewsFeed
              sanityController={props.sanityController}
            />
          </GridCol>
          <GridCol sm="3">
            <PrimaryButton onClick={f => f}>PrimaryButton</PrimaryButton>
          </GridCol>
        </GridRow>
      </Grid>
    </div>
);
