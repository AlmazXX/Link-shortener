import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {createLink} from "./linkThunk";

interface linkState {
  creating: 'idle' | 'pending' | 'success' | 'failure';
  shortUrl: string;
}

const initialState: linkState = {
  creating: 'idle',
  shortUrl: '',
}

export const linkSlicer = createSlice({
  name: 'link',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createLink.pending, state => {
      state.creating = 'pending';
    }).addCase(createLink.fulfilled, (state, {payload: shortUrl}) => {
      state.creating = 'success';
      state.shortUrl = shortUrl;
    }).addCase(createLink.rejected, state => {
      state.creating = 'failure';
    })
  }
})

export const linkReducer = linkSlicer.reducer;
export const selectLinkCreating = (state: RootState) => state.link.creating;
export const selectShortUrl = (state: RootState) => state.link.shortUrl;