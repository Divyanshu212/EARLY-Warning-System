const apiKey = 'h52IzWqzmD4f84tBWqrlbehCgcsaRzk9HChiKNq2';
    const weatherApiKey = '4bf08d738152637dc0760b7d00532cef';

    function fetchWeatherByCity(city) {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;

      if (city) {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            updateWeatherInfo(data);
            fetchSatelliteImage(data.coord.lat, data.coord.lon);
            fetchTopographyData(data.coord.lat, data.coord.lon);
            fetchHydrologicalData();
            fetchGlacierData();
            fetchPrecipitationData();
            fetchSeismicActivityData(data.coord.lat, data.coord.lon);
            fetchHistoricalFloodData();
            fetchRealTimeWaterLevelData();
            document.getElementById('city-input').value = '';
          })
          .catch(error => console.log('Error:', error));
      }
    }

    function updateWeatherInfo(data) {
      document.getElementById('city-country').textContent = `${data.name}, ${data.sys.country}`;
      document.getElementById('weather-name').textContent = data.weather[0].main;
      document.getElementById('weather-temp').textContent = data.main.temp;
      document.getElementById('weather-pressure').textContent = data.main.pressure; // Pressure
      document.getElementById('weather-wind-speed').textContent = data.wind.speed;
      document.getElementById('weather-visibility').textContent = (data.visibility / 1000).toFixed(1);
    }

    function fetchSatelliteImage(lat, lon) {
      const satelliteUrl = `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=2023-09-12&dim=0.1&api_key=${apiKey}`;

      fetch(satelliteUrl)
        .then(response => response.json())
        .then(imageData => {
          if (imageData.url) {
            document.getElementById('satellite-img').src = imageData.url;
          } else {
            alert("Satellite image not available for this location.");
          }
        })
        .catch(err => console.error('Error fetching satellite image:', err));
    }

    // Example functions to fetch additional data
    function fetchTopographyData(lat, lon) {
      // Replace with actual API call for topographical data
      const topographyData = 2000; // Example data
      document.getElementById('topography-data').textContent = topographyData;
    }

    function fetchHydrologicalData() {
      // Replace with actual API call for hydrological data
      const hydrologicalData = "Moderate water flow"; // Example data
      document.getElementById('hydrological-data').textContent = hydrologicalData;
    }

    function fetchGlacierData() {
      // Replace with actual API call for glacier/snowmelt data
      const glacierData = "Snowmelt observed"; // Example data
      document.getElementById('glacier-data').textContent = glacierData;
    }

    function fetchPrecipitationData() {
      // Replace with actual API call for precipitation data
      const precipitationData = 15; // Example data in mm
      document.getElementById('precipitation-data').textContent = precipitationData;
    }

    function fetchSeismicActivityData(lat, lon) {
      const seismicUrl = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=${lat}&longitude=${lon}&maxradiuskm=100`;
      
      fetch(seismicUrl)
        .then(response => response.json())
        .then(data => {
          const recentEarthquake = data.features[0]?.properties?.mag || 'No recent seismic activity';
          document.getElementById('seismic-activity').textContent = recentEarthquake;
        })
        .catch(err => console.error('Error fetching seismic data:', err));
    }

    function fetchHistoricalFloodData() {
      // Replace with actual API call for historical flood data
      const floodData = "Flooding in 2021"; // Example data
      document.getElementById('historical-flood-data').textContent = floodData;
    }

    function fetchRealTimeWaterLevelData() {
      // Replace with actual API call for real-time water level monitoring
      const waterLevelData = "3.5 meters"; // Example data
      document.getElementById('water-level-data').textContent = waterLevelData;
    }

    document.getElementById('search-btn').addEventListener('click', () => {
      const cityName = document.getElementById('city-input').value;
      fetchWeatherByCity(cityName);
    });
    document.querySelectorAll('.card1').forEach(card => {
      card1.addEventListener('click', () => {
          const id = card.getAttribute('data-id');
          window.location.href = `Untitled-1.html?id=${id}`;
      });
  });