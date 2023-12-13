import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Writings from './pages/Writings';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to='about' />} />
          <Route path='about' element={<About />} />
          <Route path='writings' element={<Writings />} />
          <Route path='contact' element={<Contact />} />
          <Route path='blog' element={<Blog />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
