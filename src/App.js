import { BrowserRouter, Routes, Route } from 'react-router-dom';

// STYLES
import './assets/scss/styles.css';

// PAGES
import Main from './pages/Main';
import Article from './pages/Article';
import Project from './pages/Project';
import Member from './pages/Member';

// COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <BrowserRouter>
      <div className="container">
        <Header/>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/article' element={<Article />}/>
          <Route path='/project' element={<Project />}/>
          <Route path='/member' element={<Member />}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
