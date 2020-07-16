import React from 'react';
import logo from '../logo.svg';
import Header from '../components/header';
import '../App.scss';
import Footer from "../components/footer";

function App({children}:any) {
  return (
    <React.Fragment>
      <Header />
        {children}
      <Footer/>
    </React.Fragment>
  );
}

export default App;
