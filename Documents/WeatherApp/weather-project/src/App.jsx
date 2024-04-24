import Home from './components/home';
import Weather from './components/weather';
import Carousels from './components/carousel';
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  
  },
  {
    path: "/carousel",
    element: <Carousels/>
  
  },
  {
    path: "/weather",
    element: <Weather/>
  
  },])

function App() {
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
