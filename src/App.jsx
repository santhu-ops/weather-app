import { useState, useEffect } from "react";
import { fetchWeather, fetchForeCast } from "./WeatherData";
import Header from "./componets/Header";
import ForecastCard from "./componets/ForecastCard";
import WeekForecast from "./componets/WeekForecast";
import CityCard from "./componets/CityCard";
import RainChart from "./componets/RainChart";
import MapSection from "./componets/MapSection";

const App = () => {
  const [city, setCity] = useState("Chennai");
  const [weather, setWeather] = useState(null);
  const [day, setDay] = useState([]);

  const handleSearch = (searchCity) => setCity(searchCity);

  useEffect(() => {
    async function getWeather() {
      const data = await fetchWeather(city);
      setWeather(data);
    }
    getWeather();
  }, [city]);

  useEffect(() => {
    async function getDay() {
      const data = await fetchForeCast(city);
      const daily = data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );
      setDay(daily);
    }
    getDay();
  }, [city]);

  return (
    <div className="min-h-screen bg-[#0f1117] text-white flex flex-col">
    <div className="min-h-screen bg-[#0f1117] text-white flex flex-col">
      
      <Header onSearch={handleSearch} city={city} />

      <div className="flex gap-4 p-4 flex-1">

       
        <div className="flex flex-col gap-4 flex-1">

          <p className="text-gray-400 text-sm font-medium tracking-wide uppercase">Next 7 days</p>

        
          <div className="flex gap-3 items-stretch">

     
            {weather && <WeekForecast weather={weather} />}

      
            <div className="flex gap-3 flex-1">
              {day.map((item) => (
                <ForecastCard key={item.dt} day={item} />
              ))}
            </div>

          </div>

         
          <div className="bg-[#1a1d27] rounded-3xl p-4 flex-1 min-h-[280px]">
            <div className="flex justify-between items-center mb-3">
              <p className="text-white font-semibold text-sm">Global map</p>
              <button className="text-xs text-gray-400 bg-[#0f1117] px-3 py-1 rounded-xl">View wide</button>
            </div>
            {weather && (
              <MapSection
                lat={weather.coord.lat}
                lon={weather.coord.lon}
                city={weather.name}
              />
            )}
          </div>

        </div>

   
        <div className="flex flex-col gap-4 w-64 shrink-0">
          {day.length > 0 && <RainChart forecast={day} />}
          <CityCard />
        </div>

      </div>
    </div>
    </div>
  );
};

export default App;