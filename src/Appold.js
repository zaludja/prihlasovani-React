import './styles/main.css';
import React from 'react';
import Header from './components/Header';
import MainLogo from './components/MainLogo';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <main>
        <MainLogo />
        <LoginForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
