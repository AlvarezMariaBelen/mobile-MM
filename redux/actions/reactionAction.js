import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getReactions = createAsyncThunk("getReactions", async ({ id, token }) => {
  let headers = { Headers: { Authorization: `Bearer ${token}` } };
  try {
    const response = await axios.get(
      `${BASE_URL}/reactions?itineraryId=${id}`,
      headers
    );
    return response.data;
  } catch (error) {
    return {
      payload: error.response.data,
    };
  }
});

const updateReaction = createAsyncThunk("updateReaction", async (data) => {
  let headers = { Headers: { Authorization: `Bearer ${data.token}` } };
  try {
    const response = await axios.put(
      `${BASE_URL}/reactions?name=${data.name}&itineraryId=${data.id}`,
      null,
      headers
    );
    return response.data;
  } catch (error) {
    return {
      payload: error.response.data,
    };
  }
});

const deleteReaction = createAsyncThunk(
  "deleteReaction",
  async ({ id, token }) => {
    let headers = { Headers: { Authorization: `Bearer ${token}` } };
    try {
      const response = await axios.put(
        `${BASE_URL}/reactions/${id}`,
        null,
        headers
      );
      return response.data.response;
    } catch (error) {
      return {
        payload: error.response.data,
      };
    }
  }
);

const getMyReactions = createAsyncThunk(
  "getMyReactions",
  async ({ id, token }) => {
    let headers = { Headers: { Authorization: `Bearer ${token}` } };
    try {
      const response = await axios.get(
        `${BASE_URL}/reactions?userId=${id}`,
        headers
      );
      return response.data.data;
    } catch (error) {
      return {
        payload: error.response.data,
      };
    }
  }
);
const createReaction = createAsyncThunk(
  "createReaction",
  async ({ datos, token }) => {
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let url = `${BASE_URL}/reactions`;
    try {
      const res = await axios.post(url, datos, headers);
      return {
        success: true,
        reactions: res.data.response,
        response: res,
      };
    } catch (error) {
      return {
        success: false,
        response: error.response.data.message,
      };
    }
  }
);

const reactionAction = {
  getReactions,
  updateReaction,
  deleteReaction,
  getMyReactions,
  createReaction,
};

export default reactionAction;
