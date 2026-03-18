import {createBrowserRouter} from 'react-router-dom'
import Register from '../components/register/Register'
import Login from './../components/login/Login';

const routes=createBrowserRouter([
    {
        path:"/",
        element:<Login></Login>

},
{
    path:"/register",
    element:<Register></Register>
}
])
export default routes
