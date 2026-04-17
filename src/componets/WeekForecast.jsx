const WeekForecast = ({ weather }) => {
  const icon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  const day = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const time = new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="bg-[#1a1d27] rounded-3xl p-6 w-64 shrink-0 flex flex-col justify-between min-h-[280px]">

      <div className="flex justify-between items-center">
        <p className="text-white font-semibold text-base">{day}</p>
        <p className="text-gray-400 text-sm">{time}</p>
      </div>

      <div className="flex items-center justify-between mt-2">
        <p className="text-7xl font-bold text-white">{Math.round(weather.main.temp)}°</p>
        <img src={icon} alt="icon" className="w-24 h-24" />
      </div>

  
      <p className="text-gray-400 capitalize text-sm mt-1">{weather.weather[0].description}</p>

   
      <div className="border-t border-gray-700 pt-3 mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-400">
        <p>Real Feel <span className="text-white">{Math.round(weather.main.feels_like)}°</span></p>
        <p>Humidity <span className="text-white">{weather.main.humidity}%</span></p>
        <p>Wind <span className="text-white">{weather.wind.speed} m/s</span></p>
        <p>Pressure <span className="text-white">{weather.main.pressure}</span></p>
        <p>Sunrise <span className="text-white">{sunrise}</span></p>
        <p>Sunset <span className="text-white">{sunset}</span></p>
      </div>

    </div>
  );
};

export default WeekForecast;