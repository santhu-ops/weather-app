const ForecastCard = ({ day }) => {
  const dayName = new Date(day.dt_txt).toLocaleDateString("en-US", {
    weekday: "short",
  });
  const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;

  return (
    <div className="bg-[#1a1d27] rounded-3xl p-4 flex flex-col items-center justify-center gap-3 flex-1 min-h-[200px]">
      <p className="text-gray-400  text-sm font-medium">{dayName}</p>
      <img src={icon} alt="icon" className="w-12 h-12" />
      <p className="text-white font-bold text-2xl">
        {Math.round(day.main.temp)}°
      </p>
    </div>
  );
};

export default ForecastCard;
