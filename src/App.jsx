import './styles/main.sass';
import 'antd/dist/reset.css';
import React from 'react';
import Header from './components/Header';
import MainLogo from './components/MainLogo';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import ArticleList from "./components/ArticleList";
import CreateList from "./components/CreateList";


function App() {
  return (
  <BrowserRouter basename={"/zaludja/"}>
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
          <Route path="/clanky" element={<ArticleList />} />
          <Route path="/create" element={<CreateList />} />
        </Routes>
      </main>
      <Footer />
  </BrowserRouter>
  );
}

export default App;
