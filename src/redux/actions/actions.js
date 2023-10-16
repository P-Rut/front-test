import { fetchPhotos } from "../../api"

export const fetchMorePhotos = (perPage, page) => (dispatch) => {
  fetchPhotos({ perPage, page }).then((res) => {
    dispatch({ type: "FETCH_PHOTOS", payload: res.images })
  })
}
