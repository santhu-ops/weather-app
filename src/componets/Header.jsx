import { useState } from "react";

const Header = ({ onSearch, city }) => {
  const [input, setInput] = useState("");

  return (
    <div className="flex items-center gap-4 bg-[#1a1d27] px-6 py-4 border-b border-gray-800">
      
     
      <div className="grid grid-cols-2 gap-1 cursor-pointer opacity-60 hover:opacity-100">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 bg-white rounded-sm" />
        ))}
      </div>

     
      <div className="flex items-center gap-1 text-sm text-gray-300">
        <span className="text-blue-400">📍</span>
        <span className="text-white font-medium">{city}</span>
      </div>

    
      <div className="flex items-center gap-2 bg-[#0f1117] rounded-2xl px-4 py-2 flex-1 max-w-lg mx-auto">
        <span className="text-gray-500 text-sm">🔍</span>
        <input
          type="text"
          placeholder="Search city..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch(input)}
          className="bg-transparent text-white text-sm outline-none flex-1 placeholder-gray-600"
        />
      </div>

    
      <div className="flex items-center gap-2 ml-auto">
        <button className="w-9 h-9 rounded-full bg-[#0f1117] flex items-center justify-center text-gray-400 hover:text-white text-base">⚙️</button>
        <button className="w-9 h-9 rounded-full bg-[#0f1117] flex items-center justify-center text-gray-400 hover:text-white text-base">🌙</button>
        <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm">U</div>
      </div>

    </div>
  );
};

export default Header;