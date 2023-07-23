import axios from "axios"

const Satellite = axios.create({
      timeout: 10000,
})

// Satellite.interceptors.response.use(
//       (response) => {
//             console.log("SUCCESS SATELLITE", JSON.stringify(response, null, 2));
//             return response;
//       },
//       (error) => {
//             console.log("ERROR SATELLITE", JSON.stringify(error, null, 2));
//       }
// );


export default Satellite;