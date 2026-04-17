import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const createWeatherIcon = (emoji) =>
  L.divIcon({
    className: "",
    html: `<div style="
      background: #1a1d27;
      border: 2px solid #2e3147;
      border-radius: 50%;
      width: 38px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    ">${emoji}</div>`,
    iconSize: [38, 38],
    iconAnchor: [19, 19],
  });

const weatherCities = [
  { name: "Pune", label: "Highest Temp", emoji: "🌡️", lat: 18.5204, lon: 73.8567 },
  { name: "Chennai", label: "Most Rainy", emoji: "🌧️", lat: 13.0827, lon: 80.2707 },
  { name: "Punjab", label: "Most Stormy", emoji: "⛈️", lat: 31.1471, lon: 75.3412 },
  { name: "Mumbai", label: "Thunderstorm", emoji: "🌩️", lat: 19.0760, lon: 72.8777 },
  { name: "Delhi", label: "Wind", emoji: "💨", lat: 28.6139, lon: 77.2090 },
];

const MapSection = ({ lat, lon, city }) => {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden">
      <MapContainer
        center={[lat, lon]}
        zoom={5}
        style={{ height: "400px", width: "100%", borderRadius: "12px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={[lat, lon]} icon={icon}>
          <Popup>{city}</Popup>
        </Marker>

       
        {weatherCities.map((c) => (
          <Marker
            key={c.name}
            position={[c.lat, c.lon]}
            icon={createWeatherIcon(c.emoji)}
          >
            <Popup>
              <div style={{ textAlign: "center", minWidth: "100px" }}>
                <div style={{ fontSize: "22px" }}>{c.emoji}</div>
                <strong>{c.name}</strong>
                <br />
                <span style={{ color: "#888", fontSize: "12px" }}>{c.label}</span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapSection;