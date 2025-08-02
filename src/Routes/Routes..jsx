import Notfound from "../Components/NotFound/Notfound";
import Home from "../Pages/Home/Home";

 const routes = [
    {path: '/', element : Home},
    {path: '*', element: Notfound}
]

export {routes}