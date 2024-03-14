import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import Home from "./Home";
import Mypage from "./components/Mypage";
import Menu from "./components/Menu";
import RoomDetailPage from "./pages/RoomDetail/RoomDetailPage";
import Reservation from "./reservation/reservation";

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
import Filter from "./components/filter";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
              <Route path="/detail" element={<Hotellist />} />
              <Route path="/detail_room" element={<RoomDetailPage />} />
              <Route path="/reservation" element={<Reservation />} />
            </Routes>
          </div>
        </Router>{" "}
      </ThemeProvider>
    </>
  );
}
export default App;
