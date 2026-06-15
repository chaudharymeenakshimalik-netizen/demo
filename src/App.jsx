import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Home />, errorElement: <NotFound /> },
    { path: '/login', element: <Login />, errorElement: <NotFound /> },
    { path: '/dashboard', element: <Dashboard />, errorElement: <NotFound /> },
    { path: '*', element: <NotFound /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
