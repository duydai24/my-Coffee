import axios from "axios";
import * as config from "../config/config";

async function callApi(soucre, method = "GET", body) {
  try {
    return await axios({
      method: method,
      url: `${config.API_URL}/${soucre}`,
      data: body,
    });
  } catch (error) {
    console.log(error);
  }
}
export default callApi;
