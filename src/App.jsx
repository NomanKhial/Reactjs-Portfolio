
import { Route, Routes } from 'react-router'
import { routes } from './Routes/Routes.'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
     <Navbar/>
     <Routes>
      {routes.map(({path, element: Component})=> (<Route path={path} element={<Component/>}/>))}
     </Routes>


    </>
  )
}

export default App
