import React, {useState} from 'react';
import {BrowserRouter as Router, Link, Redirect, Route, Switch,} from "react-router-dom";
import SanityController from "./SanityController/SanityController";
import {MainPage} from "./components/MainPage/MainPage";
import {Article} from "./components/Article/Article";
import './styles.css';
import './main.less';
import mainLogo from './resources/SBM_Hovedlogo_Positiv_Hvit.svg';

function App() {
  const [sanityController] = useState(new SanityController());
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Link
            className={'headerLogo'}
            to={'/'}
          >
            <img
              src={mainLogo}
              alt="logo"
            />
          </Link>
        </header>
        <section className="App-content">
          <Switch>
            <Route
              path="/articles/"
              exact={true}
            >
              <Redirect
                to={'/'}
              />
            </Route>
            <Route
              path="/articles/"
              exact={false}
              render={routing => (
                <Article
                  routing={routing}
                  sanityController={sanityController}
                />
              )}
            />
            <Route path="/">
              <MainPage
                sanityController={sanityController}
              />
            </Route>
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
