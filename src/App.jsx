import './styles/main.css';
import 'antd/dist/reset.css';
import React from 'react';
import Header from './components/Header';
import MainLogo from './components/MainLogo';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import ForgotPasswordPage from "./components/ForgotPasswordPage";


function App() {
  return (
  <BrowserRouter basename={""}>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainLogo />
                <LoginForm />
              </>
            }
          />
          <Route path="/zapomenute-heslo" element={<ForgotPasswordPage />} />
        </Routes>
      </main>
      <Footer />
  </BrowserRouter>
  );
}

export default App;
