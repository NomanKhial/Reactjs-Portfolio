import { Route, Routes } from "react-router";
import { routes } from "./Routes/Routes.";
import Navbar from "./Components/Navbar/Navbar";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import { useAppContext } from "./Context/Context";

function App() {
  const { theme } = useAppContext();

  return (
    <div
      className={`${
        theme == "light" ? "light-mode" : "dark-mode"
      } root-container`}
    >
      <div
        className="main-body"
      >
        <Navbar />
        <Routes>
          {routes.map(({ path, element: Component }) => (
            <Route path={path} element={<Component />} />
          ))}
        </Routes>

        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
