import "./App.css";
import Home from "./Home";
import Mypage from "./components/Mypage";
import Menu from "./components/Menu";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/Mypage" element={<Mypage />} />
              <Route path="/Menu" element={<Menu />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/" element={<Navigate replace to="/home" />} />
              {/* <Route path="/detail/:regionName" element={<Detail />} /> */}
            </Routes>
          </div>
        </Router>{" "}
      </ThemeProvider>
    </>
  );
}

export default App;