
import { Route, Routes } from 'react-router'
import { routes } from './Routes/Routes.'
import Navbar from './Components/Navbar/Navbar'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'

function App() {

  return (
    <>
     <Navbar/>
     <Routes>
      {routes.map(({path, element: Component})=> (<Route path={path} element={<Component/>}/>))}
     </Routes>

      <ScrollToTop/>
    </>
  )
}

export default App
