import axios from "../api/jsonPlaceholder";

export const fetchAlbums = () => async dispatch => {
  const response = await axios.get("/albums");
  dispatch({
    type: "FETCH_ALBUMS",
    payload: response.data
  });
};
