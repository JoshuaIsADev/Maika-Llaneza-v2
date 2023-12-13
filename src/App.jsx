import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Writings from './pages/Writings';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';
import MainNavCms from './ui/MainNavCms';

import AboutCms from './pages/AboutCms';
import WritingsCms from './pages/WritingsCms';
import ContactCms from './pages/ContactCms';
import BlogCms from './pages/BlogCms';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to='about' />} />
            <Route path='about' element={<About />} />
            <Route path='writings' element={<Writings />} />
            <Route path='contact' element={<Contact />} />
            <Route path='blog' element={<Blog />} />
            <Route path='cms' element={<MainNavCms />} />
            <Route path='aboutcms' element={<AboutCms />} />
            <Route path='writingscms' element={<WritingsCms />} />
            <Route path='contactcms' element={<ContactCms />} />
            <Route path='blogcms' element={<BlogCms />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
