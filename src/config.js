// module.exports={
import axios from "axios";
export const url = "https://envtestfrom.herokuapp.com/api";
// }
export const publicUrl = axios.create({
    baseURL: "https://envtestfrom.herokuapp.com/api",
});
