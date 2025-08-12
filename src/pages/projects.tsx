import React, { useEffect, useState } from "react";

type Weather = {
  temperature: number;
  windspeed?: number;
};

const Projects: React.FC = () => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const projectKey = "visitCounts";

  // example project list
  const projects = [
    {
      id: "weather-api",
      title: "Weather API Project",
      description: "Node.js + frontend example that fetches current weather.",
      url: "https://open-meteo.com/" // link to project demo or API
    },
    // add more projects here
  ];

  const getVisitCounts = (): Record<string, number> => {
    const raw = localStorage.getItem(projectKey);
    return raw ? JSON.parse(raw) : {};
  };

  const recordVisit = (id: string, url: string) => {
    const counts = getVisitCounts();
    counts[id] = (counts[id] || 0) + 1;
    localStorage.setItem(projectKey, JSON.stringify(counts));
    window.open(url, "_blank");
    // small toast could be added
  };

  useEffect(() => {
    // fetch sample weather for Kolkata (Open-Meteo free)
    // Open-Meteo returns hourly temps; we use current_time index 0 for simplicity
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=22.57&longitude=88.36&current_weather=true"
    )
      .then((r) => r.json())
      .then((data) => {
        if (data && data.current_weather) {
          setWeather({ temperature: data.current_weather.temperature, windspeed: data.current_weather.windspeed });
        }
      })
      .catch(() => null);
  }, []);

  const counts = getVisitCounts();

  return (
    <div className="card">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.id} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="project-actions">
              <button className="btn" onClick={() => recordVisit(p.id, p.url)}>Visit</button>
              <span className="muted">{counts[p.id] || 0} visits</span>
            </div>
          </div>
        ))}
      </div>

      <div className="weather-box">
        <h3>Live example — Current weather (Kolkata)</h3>
        {weather ? (
          <p>{weather.temperature}°C • Wind {weather.windspeed} km/h</p>
        ) : (
          <p className="muted">Loading...</p>
        )}
        <p className="muted small">Data from Open-Meteo (free, no API key)</p>
      </div>
    </div>
  );
};

export default Projects;
