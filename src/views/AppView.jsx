import React from 'react';
import { Route } from 'react-router-dom';
import HomeView from 'views/HomeView.jsx';
import CounterView from 'views/CounterView.jsx';
import Header from 'components/Header/Header.jsx';
import Main from 'components/Main/Main.jsx';
import Footer from 'components/Footer/Footer.jsx';

function AppView() {
  return (
    <div>
      <Header />
      <Main>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/counter" component={CounterView} />
      </Main>
      <Footer />
    </div>
  );
}

export default AppView;