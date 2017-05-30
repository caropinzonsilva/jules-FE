import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header/Header.jsx';
import Main from 'components/Main/Main.jsx';

function App({ children }) {
  return (
    <div className="App">
      <Header />
      <Main>{children}</Main>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node
};

App.defaultProps = {
  children: null
};

export default App;
