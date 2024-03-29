import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import Home from "./Home";
import Menu from "./components/Menu";
import RoomDetailPage from "./pages/RoomDetail/RoomDetailPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./components/action";
import Hotellist from "./components/hotellist";
import Info from "./pages/MyPage/Info";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import Reservation from "./pages/Reservation/Reservation";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/mypage" element={<Info />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Navigate replace to="/home" />} />
              <Route path="/detail" element={<Hotellist />} />
              <Route
                path="/detail_room/:hotelId"
                element={<RoomDetailPage />}
              />
              <Route path="/reservation" element={<Reservation />} />
            </Routes>
            <Footer />
          </div>
        </Router>{" "}
      </ThemeProvider>
    </>
  );
}
export default App;
