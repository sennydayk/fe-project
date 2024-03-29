import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Calendar from "./Calendar";
import Options from "./Options";
import mainImage from "../assets/메인.webp";

const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  padding: 0;
  margin: 0;
`;

const MainImage = styled.img`
  width: 130%;
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
`;

const SearchBox = styled.div`
  border-radius: 20px;
  background-color: white;
  position: absolute;
  padding: 5px 25px 20px 25px;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: auto;
  z-index: 1;
`;

const SearchInner = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
`;

const SearchBar = styled.input`
  border: none;
  border-radius: 10px;
  flex-grow: 1;
  background-color: #f5f5f5;
  width: 35%;
  margin-right: 11px;
`;

const CalendarContainer = styled.div`
  width: 25%;
`;

const OptionsContainer = styled.div`
  width: 30%;
`;

const SearchButton = styled.button`
  background-color: #1273e4;
  border: none;
  color: white;
  font-size: 19px;
  border-radius: 10px;
  width: 10%;
  margin-left: 11px;
`;

const FooterText1 = styled.p`
  color: white;
  position: absolute;
  width: 80%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  font-size: 37px;
  font-weight: 600;
  font-style: normal;
  letter-spacing: -1px;
`;

const FooterText2 = styled.p`
  color: white;
  position: absolute;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  font-size: 37px;
  font-weight: 600;
  font-style: normal;
  letter-spacing: -1px;
`;

const Button = styled.button`
  border: none;
  background-color: white;
  padding: 5px;
  margin-top: 15px;
  margin-bottom: 20px;
  margin-right: 50px;
  border-bottom: ${(props) => (props.clicked ? "2px solid #1273E4" : "none")};
  color: ${(props) => (props.clicked ? "#1273E4" : "#707070")};
  font-weight: 600;
  font-size: 20px !important;
  font-family: "Pretendard-Regular" !important;
  letter-spacing: -1px;
`;

function MainVisual() {
  const [searchTerm, setSearchTerm] = useState(""); // 검색창 입력 값을 관리할 상태
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 함수
  const [searchParams] = useSearchParams(); // 쿼리 매개변수를 가져오는 훅

  // 컴포넌트가 마운트될 때 쿼리 문자열에서 검색어를 가져와 상태를 업데이트합니다.
  React.useEffect(() => {
    const term = searchParams.get("searchTerm") || "";
    setSearchTerm(term);
  }, [searchParams]);

  const handleSearch = () => {
    // 검색 실행 함수
    navigate(`/detail?query=${encodeURIComponent(searchTerm)}`); // /detail 경로로 이동하면서 쿼리 파라미터 전달
  };
  const handleKeyPress = (e) => {
    // If the key pressed is Enter (key code 13), trigger the search
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const [activeButton2, setActiveButton2] = useState(1);

  const handleButtonClick2 = (buttonIndex) => {
    setActiveButton2(buttonIndex);
  };

  return (
    <Container>
      <MainImage src={mainImage} alt="메인" />
      <FooterText1>국내부터 해외까지</FooterText1>
      <FooterText2>여행할때 여기어때</FooterText2>
      <SearchBox>
        <Button
          onClick={() => handleButtonClick2(1)}
          clicked={activeButton2 === 1}
        >
          국내 숙소
        </Button>
        <Button
          onClick={() => handleButtonClick2(2)}
          clicked={activeButton2 === 2}
        >
          해외 숙소
        </Button>
        <SearchInner>
          <SearchBar
            placeholder="여행지나 숙소를 검색해보세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress} // Call handleKeyPress when a key is pressed
          />
          <CalendarContainer>
            <Calendar />
          </CalendarContainer>
          <OptionsContainer>
            <Options />
          </OptionsContainer>
          <SearchButton onClick={handleSearch}> 검색</SearchButton>
        </SearchInner>
      </SearchBox>
    </Container>
  );
}

export default MainVisual;
