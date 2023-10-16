import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  list: [],
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPhotos: (state, action) => {
      state.list.push(...action.payload)
    },
  },
})

export const { fetchPhotos, setPhotos } = appSlice.actions
export default appSlice.reducer
