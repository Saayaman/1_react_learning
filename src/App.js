import React from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import TopPage from './components/TopPage/TopPage.jsx';

import './App.scss';

function App() {
    return (
      <div className="App">
        <Header />
        <TopPage />
        <Footer />
      </div>
    );
}

export default App;
