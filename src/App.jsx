import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import About from './pages/About';
import Writings from './pages/Writings';
import Contact from './pages/Contact';
// import Blog from './pages/Blog';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';

// import MainNavCms from './ui/MainNavCms';
import AboutCms from './pages/AboutCms';
import ContactsCms from './pages/ContactsCms';
// import BlogCms from './pages/BlogCms';
import ProjectsCms from './pages/ProjectsCms';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to='about' />} />
            <Route path='about' element={<About />} />
            <Route path='writings' element={<Writings />} />
            <Route path='contact' element={<Contact />} />
            {/* <Route path='blog' element={<Blog />} /> */}
            {/* <Route path='cms' element={<MainNavCms />} /> */}
            <Route path='aboutcms' element={<AboutCms />} />
            <Route path='projectscms' element={<ProjectsCms />} />
            <Route path='contactscms' element={<ContactsCms />} />
            {/* <Route path='blogcms' element={<BlogCms />} /> */}
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position='top-center'
        gutter={24}
        containerStyle={{ margin: '1rem' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '2.5rem',
            maxWidth: '400px',
            padding: '1rem',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-900)',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
