import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AboutCms from '../pages/AboutCms';
import WritingsCms from '../pages/WritingsCms';
import ContactCms from '../pages/ContactCms';
import BlogCms from '../pages/BlogCms';
import AppLayoutCms from '../../ui/cms/AppLayoutCms';
import Login from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';
import GlobalStyles from '../styles/GlobalStyles';

function AppCms() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayoutCms />}>
            <Route index element={<Navigate replace to='aboutcms' />} />
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

export default AppCms;
