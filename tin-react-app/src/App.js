
import './App.css';
import Header from "./components/fragments/header";
import MainPage from "./components/other/main";
import Footer from "./components/fragments/footer";
import {Routes, Route } from 'react-router-dom';

function App() {
  return (
      <>
          <Header />
          <Routes>
              <Route path="/" element={<MainPage/>} />
          </Routes>
          <Footer />
      </>
  );
}

export default App;
