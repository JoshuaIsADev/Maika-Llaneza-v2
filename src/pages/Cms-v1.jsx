import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

// import Blog from './pages/Blog';
import Login from './Login';
import PageNotFound from './PageNotFound';
import GlobalStyles from '../styles/GlobalStyles';
import AppLayout from '../ui/AppLayout';

import AboutCms from './AboutCms';
import ContactsCms from './ContactsCms';
// import BlogCms from '../pages/BlogCms';
import ProjectsCms from './ProjectsCms';
import Cms from './Cms';

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
            <Route index element={<Navigate replace to='aboutcms' />} />
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

export default Cms;
