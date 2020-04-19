import axios from "axios";

let http = axios.create({
  baseURL: "http://www.yangxf.vip",
  timeout: 1000 * 60,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

http.interceptors.request.use(
  config => {
    console.log("request===>", config);
  },
  error => {
    console.log("error===>", error);
  }
);

http.interceptors.response.use(
  resp => {
    console.log("resp===>", resp);
  },
  error => {
    console.log("error===>", error);
  }
);

export default {
  get: function(url) {
    return http.get(url);
  },
  post: function(url, data) {
    return http.post(url, data);
  }
};
