import axiosInstance from "../axiosInstance";
import * as actions from "./index";

export const getAllPlaylists = async (dispatch) => {
  dispatch(actions.getAllPlaylistsStart());
  try {
    const { data } = await axiosInstance.get(
      "http://localhost:5000/api/playlists"
    );
    dispatch(
      actions.getAllPlaylistsSuccess("http://localhost:5000/api/playlists".data)
    );
    return true;
  } catch (error) {
    dispatch(actions.getAllPlaylistsFailure());
    return false;
  }
};
