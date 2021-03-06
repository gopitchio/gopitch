import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => {
  return async function(dispatch){
    const res = await axios.get("/api/current_user");

    dispatch({ payload: res.data, type: FETCH_USER });
  }
};

export const handleToken = (token) => {
  return async function(dispatch){
    const res = await axios.post("/api/stripe", token);

    dispatch({ payload: res.data, type: FETCH_USER })
  }
}
 