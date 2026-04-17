const RainChart = ({ forecast }) => {
  const labels = ["Rainy", "Sunny", "Heavy"];

  return (
    <div className="bg-[#1a1d27] rounded-3xl p-5">
      <p className="text-white font-semibold text-sm mb-4">Chance of rain</p>

      <div className="flex gap-2">
  
        <div className="flex flex-col justify-between text-xs text-gray-500 pr-1 py-1" style={{ height: "120px" }}>
          {labels.map((l) => <span key={l}>{l}</span>)}
        </div>

    
        <div className="flex items-end gap-2 flex-1" style={{ height: "120px" }}>
          {forecast.map((item) => {
            const pop = item.pop ?? 0;
            const height = Math.max(pop * 100, 6);
            const timeLabel = new Date(item.dt_txt).toLocaleTimeString("en-US", { hour: "2-digit" });
            return (
              <div key={item.dt} className="flex flex-col items-center gap-1 flex-1">
                <div className="w-full flex items-end justify-center" style={{ height: "100px" }}>
                  <div
                    className="w-3 rounded-full bg-blue-400 opacity-75"
                    style={{ height: `${height}%` }}
                  />
                </div>
                <p className="text-gray-500 text-[10px]">{timeLabel}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RainChart;