import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaCloudRain } from "react-icons/fa6";

const Weather = ({ data }) => {
  const { location, current, forecast } = data;

  return (
    <div className="flex flex-col max-w-[300px] text-center">
      <div>
        <h2 className="font-semibold text-2xl">
          {location.name}, {location.region}
        </h2>
        <div className="flex flex-col text-start">
          <span className="text-5xl font-bold flex items-center justify-center">
            <img
              src={current.condition.icon}
              alt=""
              width={100}
              className="self-center"
            />
            {current.temp_c}°C
          </span>
          <h3 className="text-center text-xl my-2">
            {current.condition.text}
            <span>
              {" " +
                forecast.forecastday[0].day.maxtemp_c +
                "°C / " +
                forecast.forecastday[0].day.mintemp_c +
                "°C"}
            </span>
          </h3>
          <span className="flex items-center gap-2">
            <FaWind />
            Wind: {current.wind_kph} km/h
          </span>
          <span className="flex items-center gap-2">
            <WiHumidity />
            Humidity: {current.humidity}
          </span>
          <span className="flex items-center gap-2">
            <FaCloudRain />
            Chance of rain:{" "}
            {forecast.forecastday[0].day.daily_chance_of_rain + "%"}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Weather;
