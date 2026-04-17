import { useEffect, useState } from "react";
import { fetchWeather } from "../WeatherData";

const CITIES = ["Chennai", "Mumbai", "Bangalore", "Delhi", "Dharmapuri", "Punjab", "Pune"];

const CityCard = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function loadCities() {
      const results = await Promise.all(CITIES.map((c) => fetchWeather(c)));
      setCities(results);
    }
    loadCities();
  }, []);

  // Box 1 — Highest temperature city
  const hottestCity = cities.reduce((best, current) =>
    current.main.temp > best.main.temp ? current : best
  , cities[0]);

  // Box 2 — Most rainy city (highest humidity = more rainy chance)
  const rainiestCity = cities.reduce((best, current) =>
    current.main.humidity > best.main.humidity ? current : best
  , cities[0]);

  // Box 3 — Most stormy city (highest wind speed)
  const stormyCity = cities.reduce((best, current) =>
    current.wind.speed > best.wind.speed ? current : best
  , cities[0]);

  if (!cities.length) return (
    <div className="bg-[#1a1d27] rounded-3xl p-5 text-gray-400 text-sm">
      Loading cities...
    </div>
  );

  const boxes = [
    {
      label: "🌡️ Highest Temperature",
      city: hottestCity,
      value: `${Math.round(hottestCity?.main.temp)}°`,
      sub: "Hottest city right now",
      color: "text-orange-400",
    },
    {
      label: "🌧️ Most Rainy",
      city: rainiestCity,
      value: `${rainiestCity?.main.humidity}%`,
      sub: "Highest humidity",
      color: "text-blue-400",
    },
    {
      label: "⛈️ Most Stormy",
      city: stormyCity,
      value: `${stormyCity?.wind.speed} m/s`,
      sub: "Highest wind speed",
      color: "text-purple-400",
    },
  ];

  return (
    <div className="bg-[#1a1d27] rounded-3xl p-5 flex flex-col gap-3">

      <div className="flex justify-between items-center mb-1">
        <p className="text-white font-semibold text-sm">India Weather Stats</p>
      </div>

      {boxes.map((box, i) => (
        <div key={i} className="bg-[#0f1117] rounded-2xl p-4 flex flex-col gap-2">

          {/* Label */}
          <p className="text-gray-500 text-xs font-medium">{box.label}</p>

          {/* City name + icon + value */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <p className="text-white font-bold text-base">{box.city?.name}</p>
              <p className="text-gray-400 text-xs capitalize">
                {box.city?.weather[0].description}
              </p>
              <p className="text-gray-500 text-xs">{box.sub}</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <img
                src={`https://openweathermap.org/img/wn/${box.city?.weather[0].icon}@2x.png`}
                alt="icon"
                className="w-10 h-10"
              />
              <p className={`font-bold text-lg ${box.color}`}>{box.value}</p>
            </div>
          </div>

        </div>
      ))}

    </div>
  );
};

export default CityCard;