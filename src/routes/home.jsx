import FlashCard from '@/pages/User/FlashCard/FlashCard';
import Home from '@/pages/User/Home/Home';
import Login from '@/pages/User/Login/Login';
import App from './../App';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'flashcard',
        element: <FlashCard />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
];

export default routes;
