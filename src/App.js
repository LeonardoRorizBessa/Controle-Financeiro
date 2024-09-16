import React from 'react';
import GlobalStyle from './Styles/global';
import Header from './components/Header';
import Resume from './components/Resume';
import Form from './components/Form';

const App = () => {
  return (
      <>
        <Header />
        <Resume />
        <Form />
        <GlobalStyle />
      </>
  )
}

export default App;
