import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

const Weather = ({ data }) => {
  const { location, current } = data;

  return (
    <div className="flex flex-col max-w-[300px] text-center">
      <div>
        <h2 className="font-semibold text-2xl">
          {location.name}, {location.region}
        </h2>
        <h3 className="text-center text-xl mt-2">{current.condition.text}</h3>
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
          <span className="text-center mb-2">
            Feels like: {current.feelslike_c}°C
          </span>
          <span className="flex items-center gap-2">
            <FaWind />
            Wind: {current.wind_kph} km/h
          </span>
          <span className="flex items-center gap-2">
            <WiHumidity />
            Humidity: {current.humidity}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Weather;
