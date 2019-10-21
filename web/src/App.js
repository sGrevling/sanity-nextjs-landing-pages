import React, {useState} from 'react';
import './App.css';
import NewsFeed from "./components/NewsFeed/NewsFeed";
import SanityController from "./SanityController/SanityController";

function App() {
  const [sanityController] = useState(new SanityController());
  return (
    <div className="App">
      <header className="App-header">
        SpareBank1 Partnerportal
      </header>
      <section className="App-content">
        <NewsFeed
          sanityController={sanityController}
        />
      </section>
    </div>
  );
}

export default App;
