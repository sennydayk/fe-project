import { createSlice } from "@reduxjs/toolkit";

import React, { useEffect } from "react";

import { createStore } from "redux";
const SERVICE_KEY = process.env.REACT_APP_SERVICE_KEY;

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const searchHotel = () => { };

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const response = await fetch(
        "/B551011/KorService1/searchStay1?serviceKey=x2bXYHMeWutgCiIv7VKXZLAqluLh1OmRZLQTSr8EWz1df%2BfdJz7dri0V%2F2MV8sZ8hF0dNs%2BVDvUFIln2up4Arw%3D%3D&MobileOS=ETC&MobileApp=AppTest&_type=json&numOfRows=300"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data1 = await response.json();
      console.log("data1", data1);
      const data = await data1.response.body.items.item;
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};