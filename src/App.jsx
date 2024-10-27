import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/app-layout'

import Home from './pages/home';
import SearchPage from './pages/search';
import GifPage from './pages/single-gif';
import Category from './pages/category';
import Favorites from './pages/favorites';
import GifProvider from './context/gif-context';



const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:type/:slug",
        element: <GifPage />,
      },
      {
        path: "/:category",
        element: <Category />,
      },
      {
        path: "/search/:query",
        element: <SearchPage />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ]
  }
])




function App() {

  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>

  )
}

export default App
