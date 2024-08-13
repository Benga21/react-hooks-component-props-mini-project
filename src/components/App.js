import React from 'react';
import Header from './Header'; // Adjust the path if necessary
import About from './About'; // Adjust the path if necessary
import ArticleList from './ArticleList'; // Adjust the path if necessary
import blogData from '../data/blog'; // Ensure this is the default export

const App = () => {
  return (
    <div>
      <Header name="My Blog" />
      <About 
        image="https://e7.pngegg.com/pngimages/352/117/png-clipart-call-of-duty-black-ops-2-logo-call-of-duty-black-ops-iii-call-of-duty-4-modern-warfare-call-of-duty-video-game-call-of-duty-thumbnail.png" 
        about="Welcome to my personal blog!" 
      />
      <ArticleList articles={blogData} />
    </div>
  );
};

export default App;
