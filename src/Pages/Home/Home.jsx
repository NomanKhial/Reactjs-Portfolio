import About from "../../Components/Aboutme/About"
import Header from "../../Components/Header/Header"
import Services from "../../Components/Services/Services"
import Work from "../../Components/Work/Work"
import "./Home.css"
function Home() {
  return (
    <div>
      <Header/>
      <About/>
      <Services/>
      <Work/>
    </div>
  )
}

export default Home