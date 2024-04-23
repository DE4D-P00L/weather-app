import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import useDebouncedValue from "../hooks/useDebounce";
import Card from "../components/Card";
import Weather from "../components/Weather";

const Home = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [city, setCity] = useState("");
  const debounce = useDebouncedValue(city, 300);

  useEffect(() => {
    setErrors("");
    if (debounce.length > 0) fetchWeather();
  }, [debounce]);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${
          import.meta.env.VITE_WEATHER_API
        }&q=${debounce}&days=1&aqi=yes&alerts=no`
      );
      setData(response.data);
    } catch (error) {
      setErrors(error.response.data.error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center py-10">
      <div className="max-w-[300px] px-6 w-full mb-2">
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Enter a City"
          className="px-3 py-1.5 rounded-md bg-[#414d7d] w-full border border-slate-500"
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      {!loading && (data || errors) && (
        <Card className="max-w-md break-words p-5 bg-[#8191ce]">
          {!errors && data && <Weather data={data} />}
          {errors && <p>{errors}</p>}
        </Card>
      )}
    </div>
  );
};
export default Home;
