import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";

export const createLink = createAsyncThunk<string, string>('link/create', async (url) => {
    const {data} = await axiosApi.post('/links', url);
    return data.shortUrl;
});