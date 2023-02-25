import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header.jsx';
import Footer from './footer.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Footer/>
  </React.StrictMode>
);


