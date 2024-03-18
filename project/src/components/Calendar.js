import React, { useState, useEffect } from "react"; // useEffect를 import 추가
import { DatePicker, ConfigProvider, Space } from "antd";
import koKR from "antd/lib/locale/ko_KR";
import dayjs from "dayjs";
import "./Calendar.css";
import "dayjs/locale/ko"; // 한국어 지원을 위해 로케일 설정

dayjs.locale("ko"); // 전역 로케일 설정

const { RangePicker } = DatePicker;

const Cal = () => {
  const [selectedDates, setSelectedDates] = useState([
    dayjs(),
    dayjs().add(1, "day"),
  ]); // 기본값으로 오늘과 내일을 설정
  const [nights, setNights] = useState("");

  // 컴포넌트 마운트 시 초기 박 수 계산
  useEffect(() => {
    const start = selectedDates[0];
    const end = selectedDates[1];
    const nightsCount = end.diff(start, "day");
    setNights(`(${nightsCount}박)`);
  }, []); // 의존성 배열을 비워서 컴포넌트가 마운트될 때만 실행

  const handleDateChange = (dates) => {
    setSelectedDates(dates);
    if (dates && dates[0] && dates[1]) {
      const start = dates[0];
      const end = dates[1];
      const nightsCount = end.diff(start, "day");
      setNights(`(${nightsCount}박)`);
    } else {
      setNights(""); // 날짜 선택이 취소되면 박 수 정보를 초기화
    }
  };

  const today = dayjs();
  const tomorrow = dayjs().add(1, "day");
  const dateFormat = "MM.DD ddd";

  return (
    <ConfigProvider locale={koKR}>
      <Space direction="vertical" size={12}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "#f5f5f5",
          }}
        >
          <RangePicker
            defaultValue={[today, tomorrow]}
            format={dateFormat}
            style={{
              border: "none",
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
              height: "50px",
              width: "210px",
            }}
            separator={false}
            locale={koKR}
            dateRender={(current) => (
              <div className="ant-picker-cell-inner">{current.format("D")}</div>
            )}
            onChange={handleDateChange} // onChange 이벤트 핸들러 추가
          />
          <div
            style={{
              border: "none",
              backgroundColor: "#f5f5f5",
              display: "flex", // flex 컨테이너 설정
              justifyContent: "left", // 가로 축을 기준으로 중앙 정렬
              alignItems: "center", // 세로 축을 기준으로 중앙 정렬
              borderRadius: "10px",
              height: "50px",
              width: "60px",
              fontSize: "19px",
              fontWeight: "600",
            }}
          >
            {nights}
          </div>
        </div>
      </Space>
    </ConfigProvider>
  );
};

export default Cal;
