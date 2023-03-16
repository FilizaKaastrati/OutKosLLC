import {
  Routes,
  Route,
} from "react-router-dom";
import FirstTaskPage from './pages/FirstTask';
import SecondTaskPage from './pages/SecondTask';
import ThirdTaskPage from './pages/ThirdTask';
import MainNavigation from "./components/layout/MainNavigationComponent";

function App() {
  return (
    <>
    <MainNavigation/>
      <Routes>
        <Route exact path="/" element={<FirstTaskPage/>} />
        <Route path="/second-page" element={<SecondTaskPage/>} />
        <Route path="/third-page" element={<ThirdTaskPage/>} />
      </Routes>
  </>
  );
}

export default App;


