import { AppLoader } from '@/shared/components/AppLoader';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

function App() {
  return (
    <Suspense fallback={<AppLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
