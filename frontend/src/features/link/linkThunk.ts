import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import { ILink } from "../../types";

export const createLink = createAsyncThunk<string, ILink>(
  "link/create",
  async (link) => {
    const { data } = await axiosApi.post("/links", link);
    return data.shortUrl;
  }
);