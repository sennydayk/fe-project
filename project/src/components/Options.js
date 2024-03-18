import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 1.5px solid #ededed;
  border-radius: 50%;
  width: 39px;
  height: 39px;
  background-color: white;
  &:hover {
    background-color: #f5f5f5;
  }
  margin: 0 5px;
`;

const CustomDropdownToggle = styled(Dropdown.Toggle)`
  background-color: #f5f5f5;
  border: none;
  width: 100%;
  height: 50px;

  &:hover {
    background-color: #ebebeb;
    border: none;
  }
  &:focus,
  &:active {
    background-color: white;
    border: 1.5px solid #333333;
    outline: none;
  }
  &::after {
    display: none; /* Hide the dropdown arrow */
  }
`;

function Options() {
  const [roomCount, setRoomCount] = useState(1);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);

  const increaseRoomCount = () => {
    setRoomCount(roomCount + 1);
  };

  const decreaseRoomCount = () => {
    if (roomCount > 0) {
      setRoomCount(roomCount - 1);
    }
  };

  const increaseAdultCount = () => {
    setAdultCount(adultCount + 1);
  };

  const decreaseAdultCount = () => {
    if (adultCount > 0) {
      setAdultCount(adultCount - 1);
    }
  };

  const increaseChildCount = () => {
    setChildCount(childCount + 1);
  };

  const decreaseChildCount = () => {
    if (childCount > 0) {
      setChildCount(childCount - 1);
    }
  };
  const Divider = styled.hr`
    margin: 7px 20px;
  `;
  return (
    <div>
      <Dropdown style={{ padding: "0", margin: "0", width: "100%" }}>
        <CustomDropdownToggle
          variant="light"
          id="dropdown-basic"
          style={{ fontSize: "20px" }}
        >
          {roomCount > 0 && `객실 ${roomCount}`}{" "}
          {adultCount > 0 && `성인 ${adultCount}`}{" "}
          {childCount > 0 && `아동 ${childCount}`}
        </CustomDropdownToggle>

        <Dropdown.Menu style={{ border: "none" }}>
          <div className="d-flex align-items-center">
            <span style={{ marginLeft: "15px", marginRight: "10px" }}>
              객실{" "}
            </span>
            <StyledButton size="sm" variant="light" onClick={decreaseRoomCount}>
              -{" "}
            </StyledButton>
            <span> {roomCount}</span>
            <StyledButton size="sm" variant="light" onClick={increaseRoomCount}>
              +
            </StyledButton>
          </div>{" "}
          <Divider />
          <div className="d-flex align-items-center">
            <span style={{ marginLeft: "15px", marginRight: "10px" }}>
              성인{" "}
            </span>
            <StyledButton
              size="sm"
              variant="light"
              onClick={decreaseAdultCount}
            >
              -{" "}
            </StyledButton>
            <span> {adultCount}</span>
            <StyledButton
              size="sm"
              variant="light"
              onClick={increaseAdultCount}
            >
              +
            </StyledButton>
          </div>{" "}
          <Divider />
          <div className="d-flex align-items-center">
            <span style={{ marginLeft: "15px", marginRight: "10px" }}>
              아동{" "}
            </span>
            <StyledButton
              size="sm"
              variant="light"
              onClick={decreaseChildCount}
            >
              -{" "}
            </StyledButton>
            <span> {childCount}</span>
            <StyledButton
              size="sm"
              variant="light"
              onClick={increaseChildCount}
            >
              +
            </StyledButton>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Options;
