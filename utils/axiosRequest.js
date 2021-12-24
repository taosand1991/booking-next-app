import axios from "axios";

axios.defaults.headers["x-rapidapi-host"] = "booking-com.p.rapidapi.com";
axios.defaults.headers["x-rapidapi-key"] =
  process.env.NEXT_PUBLIC_RAPID_API_KEY;

export default axios;
