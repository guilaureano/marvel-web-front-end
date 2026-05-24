import { Outlet } from 'react-router-dom';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* <Topbar /> */}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}
