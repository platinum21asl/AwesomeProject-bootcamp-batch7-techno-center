import axios from "axios";

const Satellite = axios.create({
  baseURL: "https://be-rmy.dev.berijalan.co.id/rest/v1/",
  timeout: 1000, // miliseconds
  Headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

Satellite.interceptors.response.use(
  (response) => {
    console.log("SUCCESS SATELLITE", JSON.stringify(response, null, 2));

    return response;
  },
  (error) => {
    console.log("ERROR SATELLITE", JSON.stringify(error, null, 2));
  }
);

export default Satellite;
