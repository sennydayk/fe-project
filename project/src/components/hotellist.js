import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./hotellist.css";
import { fetchData } from "./action";
import { Link, useSearchParams } from "react-router-dom";

const Hotellist = () => {
  const dispatch = useDispatch();
  const data1 = useSelector((state) => state.data);
  const [filteredData, setFilteredData] = useState([]);

  // useSearchParams 훅을 사용하여 쿼리 문자열에서 검색어를 가져옴
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("query");
  console.log("Search term:", searchTerm);

  useEffect(() => {
    if (!data1.length) {
      dispatch(fetchData());
    }
  }, [data1, dispatch]);

  useEffect(() => {
    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();
      const filtered = data1.filter((item) => {
        const isMatch = item.addr1.toLowerCase().includes(searchTermLower);
        console.log(`Address: ${item.addr1}, Is Match: ${isMatch}`);
        return isMatch;
      });
      setFilteredData(filtered);
      console.log("Filtered Data:", filtered); // 이 부분 추가
    } else {
      setFilteredData(data1);
    }
  }, [data1, searchTerm]);

  // 랜덤 가격을 생성하는 함수
  const generateRandomPrice = () => {
    const price = Math.floor(Math.random() * (240000 - 60000 + 1)) + 60000; // 60,000원에서 240,000원까지의 랜덤 가격 생성
    const roundedPrice = Math.round(price / 1000) * 1000; // 가격을 반올림하여 마지막 3자리를 000으로 만듦
    return `${roundedPrice.toLocaleString()}`; // 숫자를 문자열로 변환하고 "원"을 추가하여 반환
  };

  // const navigate = useNavigate();
  // const roomDetailClick = () => {
  //   navigate(`/detail_room`);
  // };
  return (
    <>
      <div className="container">
        <div className="options">
          {/* 태그 기반 옵션 */}
          <div className="option-group">
            <div
              style={{
                fontSize: "20px",
                fontWeight: "600",
                paddingBottom: "10px",
              }}
            >
              취향
            </div>
            <button className="optionbutton">#가족여행숙소</button>
            <button className="optionbutton">#스파</button>
            <button className="optionbutton">#파티룸</button>
            <button className="optionbutton">#OTT</button>
            <button className="optionbutton">#연인추천</button>
            <button className="optionbutton">#감성숙소</button>

            <button className="optionbutton">#연박특가</button>
            <button className="optionbutton">#리뷰좋은</button>
            <button className="optionbutton">#반려견</button>
            <button className="optionbutton">#BBQ</button>
            <button className="optionbutton">#온수풀</button>
            <button className="optionbutton">#스키장근처</button>
            <button className="optionbutton">#해돋이명소</button>
          </div>
          <div className="option-group">
            {" "}
            <div
              style={{
                fontSize: "20px",
                fontWeight: "600",
                paddingBottom: "10px",
              }}
            >
              할인혜택
            </div>
            <button className="optionbutton">쿠폰할인</button>
            <button className="optionbutton">무한대실</button>
            <button className="optionbutton">할인특가</button>
          </div>
          <div className="option-group">
            {" "}
            <div
              style={{
                fontSize: "20px",
                fontWeight: "600",
                paddingBottom: "10px",
              }}
            >
              등급
            </div>
            <button className="optionbutton">5성급</button>
            <button className="optionbutton">4성급</button>
            <button className="optionbutton">블랙</button>
            <button className="optionbutton">풀빌라</button>
          </div>
        </div>
        <div className="hotelList">
          {/* 호텔 리스트 */}
          {filteredData.map(
            (item) =>
              // 사진이 있는 경우에만 호텔 정보 출력
              item.firstimage && (
                <Link
                  key={item.id}
                  to={`/Detail_room/${item.title}`}
                  state={{
                    address: item.addr1,
                    mapx: item.mapx,
                    mapy: item.mapy,
                    img: item.firstimage
                  }}
                >
                  <div
                    className="hotelitem"
                  >
                    <img
                      className="hotelimage"
                      src={item.firstimage}
                      alt={item.title}
                    />
                    <div className="hotelinfo">
                      <div
                        style={{
                          fontSize: "22px",
                          fontWeight: "600",
                          paddingBottom: "10px",
                        }}
                      >
                        {item.title}
                      </div>
                      <div>{item.addr1}</div>
                      <div>{item.addr2}</div>
                      {/* 랜덤 가격을 표시 */}
                      <div
                        style={{
                          fontSize: "25px",
                          fontWeight: "600",
                          marginTop: "120px",
                        }}
                      >
                        {generateRandomPrice()}원
                      </div>
                    </div>
                  </div>
                </Link>
              )
          )}

        </div>
      </div >
    </>
  );
};

export default Hotellist;
