import { createBrowserRouter } from 'react-router-dom';
import { Products } from '../pages';


const router = createBrowserRouter([
  {
    path: '/',
    Component: Products,
  },
]);

export default router;
