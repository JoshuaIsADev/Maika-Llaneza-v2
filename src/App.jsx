import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';

import AboutCms from './pages/AboutCms';
import ContactsCms from './pages/ContactsCms';
// import BlogCms from './pages/BlogCms';
import ProjectsCms from './pages/ProjectsCms';
import AppLayoutCms from './ui/AppLayoutCms';
import ProtectedRoute from './ui/ProtectedRoute';

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
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}

      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to='home' />} />
            <Route path='home' element={<Home />} />
          </Route>
          <Route
            element={
              <ProtectedRoute>
                <AppLayoutCms />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to='login' />} />
            {/* <Route path='blog' element={<Blog />} /> */}
            <Route path='/aboutcms' element={<AboutCms />} />
            <Route path='/projectscms' element={<ProjectsCms />} />
            <Route path='/contactscms' element={<ContactsCms />} />
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
          className: 'toast-message',
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            maxWidth: '400px',
            padding: '1rem',
            backgroundColor: 'var(--color-danger)',
            color: 'var(--color-grey-900)',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
