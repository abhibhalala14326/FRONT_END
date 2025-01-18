import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Stopwatch from '../Task/Stopwatch'
import PlayingPausingvideo from "../Task/PlayingPausingvideo";
import ScrollingImg from "../Task/ScrollingImg";
import Navbar from '../Comonenets/Navbar';
import InputFocusing from './InputFocusing ';
import Counter from './Counter';


const List = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Stopwatch />,
      },
      {
        path: "/Counter",
        element: <Counter />,
      },
      {
        path: "/PlayingPausingvideo",
        element: <PlayingPausingvideo />,
      },
      {
        path: "/InputFocusing",
        element: <InputFocusing />,
      },
      {
        path: "/ScrollingImg",
        element: <ScrollingImg />,
      },
    ],
  },
]); 

const Layout = () => {
  return (
    <div>
      <RouterProvider router={List}/>
    </div>
  )
}

export default Layout
