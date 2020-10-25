const getWeatherData = () => Promise.resolve([
  {
    forecastUrl: "https://api.weather.gov/gridpoints/PQR/112,103/forecast",
    iconUrl: "https://api.weather.gov/icons/land/day/tsra,40?size=medium",
    location: {
      coordinates: {
        lat: 45.5154586,
        lng: -122.6793461
      },
      name: "Portland"
    },
    temp: "59 F",
    weather: "Chance Showers And Thunderstorms"
  },
  {
    forecastUrl: "https://api.weather.gov/gridpoints/PDT/34,40/forecast",
    iconUrl: "https://api.weather.gov/icons/land/day/tsra_sct,50?size=medium",
    location: {
      coordinates: {
        lat: 44.0581728,
        lng: -121.3153096
      },
      name: "Bend"
    },
    temp: "51 F",
    weather: "Scattered Showers And Thunderstorms",
  },
  {
    forecastUrl: "https://api.weather.gov/gridpoints/PQR/73,120/forecast",
    iconUrl: "https://api.weather.gov/icons/land/day/tsra,90?size=medium",
    location: {
      coordinates: {
        lat: 45.7184398,
        lng: -123.9351354
      },
      name: "Manzanita",
    },
    temp: "55 F",
    weather: "Showers And Thunderstorms",
  },
]);

const weatherMiddleware = async (req, res, next) => {
  if (!res.locals.partials) {
    res.locals.partials = {};
  }
  // eslint-disable-next-line require-atomic-updates
  res.locals.partials.weatherContext = await getWeatherData();
  next();
};

module.exports = weatherMiddleware;
