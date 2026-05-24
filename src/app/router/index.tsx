import DashboardPage from '@/pages/Dashboard';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />
      }
      //    <Route component={Characters} path='/characters/:id/series' />
      // <Route component={FormEdit} path='/characters/:id/edit' />
    ]
  }
]);
