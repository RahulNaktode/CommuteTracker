import React, { useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import propertyData from "./properties.json";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapLocator.css"; 

// Fix for default Leaflet icons
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const workplaceIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function MapLocator() {
  const workLocation = { lat: 21.1458, lng: 79.0882 };
  const [maxTime, setMaxTime] = useState(25);
  const [mode, setMode] = useState("driving");

 const properties = useMemo(() => propertyData, []);

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a = Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
  };

  const filteredProperties = properties.map((p) => {
    const dist = getDistance(workLocation.lat, workLocation.lng, p.lat, p.lng);
    let multiplier = mode === "walking" ? 12 : mode === "biking" ? 5 : 3;
    const commuteTime = Math.round(dist * multiplier);
    return { ...p, commuteTime };
  }).filter((p) => p.commuteTime <= maxTime);

  const getEmoji = (m) => (m === "driving" ? "🚗" : m === "walking" ? "🚶" : "🚲");

  return (
    <div className="app-container">
      <header className="app-header">
        <h2 style={{ margin: 0 }}>Nagpur Commute Search</h2>
        <div className="header-controls">
          <span>Mode:</span>
          <select className="mode-select" value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="driving">🚗 Driving</option>
            <option value="biking">🚲 Biking</option>
            <option value="walking">🚶 Walking</option>
          </select>

          <span style={{ marginLeft: "20px" }}>Max Commute:</span>
          <input
            className="range-input"
            type="range" min="5" max="60"
            value={maxTime}
            onChange={(e) => setMaxTime(Number(e.target.value))}
          />
          <b className="time-display">{maxTime} min</b>
        </div>
      </header>

      <div className="main-content">
        <div className="sidebar">
          <p className="sidebar-info">Within <b>{maxTime} mins</b> via <b>{mode}</b></p>
          <hr />
          {filteredProperties.map((p) => (
            <div key={p.id} className="property-card">
              <div className="property-name">{p.name}</div>
              <div className="property-price">{p.price}</div>
              <div className="commute-info">
                {getEmoji(mode)} Est. Commute: <b>{p.commuteTime} mins</b>
              </div>
            </div>
          ))}
          {filteredProperties.length === 0 && (
            <p className="no-results">No flats found. Try increasing time or changing mode!</p>
          )}
        </div>

        <MapContainer center={[21.1458, 79.0882]} zoom={13} className="map-view">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[workLocation.lat, workLocation.lng]} icon={workplaceIcon}>
            <Popup><b>Workplace: Sitabuldi</b></Popup>
          </Marker>

          {filteredProperties.map((p) => (
            <Marker key={p.id} position={[p.lat, p.lng]}>
              <Popup>
                <strong>{p.name}</strong><br />
                Rent: {p.price}<br />
                {getEmoji(mode)} {p.commuteTime} mins
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default MapLocator;