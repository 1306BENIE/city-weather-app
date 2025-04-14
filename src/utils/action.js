import { SET_WHEATHER } from "./Action_type";

const API_KEY = "dcb94e9ffbbc48306e7d1d3ae1a5b791";
const API_WHEATHER_URL = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=fr`;
const set_wheather = (data) => ({
  type: SET_WHEATHER,
  payload: data,
});

// const fetchWeather = async (city) => {
//     setLoading(true)
//     setError(null)
//     try {
//       const res = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&lang=fr`
//       )
//       if (!res.ok) throw new Error("Ville non trouvée")
//       const data = await res.json()
//       setWeatherData(data)
//     } catch (err) {
//       setError(err.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return { weatherData, loading, error, fetchWeather }

const getWheatherBycity = (city) => async (dispatch) => {
  try {
    const res = await fetch(API_WHEATHER_URL);
    const data = await res.json();
  } catch (error) {}
};
