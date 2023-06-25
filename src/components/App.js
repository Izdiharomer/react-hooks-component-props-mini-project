import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

function App() {
  return (
    <div className="App">
      <Header blogName="My Awesome Blog" />
      <About image="" aboutText="Welcome to my blog! This is where I share my thoughts and experiences." />
      <ArticleList posts={[]} />
    </div>
  );
}

export default App;
