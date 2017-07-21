const getCoords = () => new Promise((resolve, reject) => {
  let coords;
  chrome.storage.sync.get('s-coords', (obj) => {
    coords = obj.coords;
  });

  if (coords) {
    console.log('coooooooords', coords);
    localStorage.setItem('s-coords', JSON.stringify(coords));
    resolve(coords);
    return;
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { longitude, latitude } = position.coords;
      const obj = {
        longitude,
        latitude,
      };
      chrome.storage.sync.set({
        's-coords': obj,
      }, () => {
        localStorage.setItem('s-coords', JSON.stringify(obj));
      });
      resolve(obj);
    });
  } else {
    reject(new Error('failed to get coords'));
  }
});

const getWeatherInfo = (data) => {
  const coords = data || JSON.parse(localStorage.getItem('s-coords'));
  const { longitude, latitude } = coords;
  const tempUnit = localStorage.getItem('s-tempUnit') || 'celsius';
  const metricSystem = (tempUnit === 'fahrenheit') ? 'imperial' : 'metric';
  fetch(`http://localhost:8080/api/weather/${latitude},${longitude},${metricSystem}`)
    .then(response => response.json())
    .then((forecast) => {
      console.log(forecast);
      localStorage.setItem('s-weather', JSON.stringify(forecast));
    })
    .catch(error => console.log(error));
};

const fetchRandomPhoto = () => {
  fetch('http://localhost:8080/api/photos/random')
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem('nextImage', JSON.stringify(data));
    });
};

const init = () => {
  getCoords()
    .then(data => getWeatherInfo(data))
    .catch(error => console.log(error));
  fetchRandomPhoto();
};


const setBackgroundPhoto = () => {
  fetchRandomPhoto();

  if (!localStorage.getItem('s-coords')) {
    getCoords();
  }

  if (!localStorage.getItem('s-weather')) {
    getWeatherInfo();
    return;
  }

  const weatherData = JSON.parse(localStorage.getItem('s-weather'));
  const timestamp = weatherData.dt;

  if (timestamp) {
    const lessThanOneHourAgo = (timestamp) => {
      const twoHours = 2 * (1000 * 60 * 60);
      const twoHoursAgo = Date.now() - twoHours;
      return timestamp > twoHoursAgo;
    };

    if (!lessThanOneHourAgo()) {
      getWeatherInfo();
    }
  }
};

chrome.runtime.onInstalled.addListener(init);
chrome.tabs.onCreated.addListener(setBackgroundPhoto);

chrome.runtime.onMessage.addListener((request, sender) => {
  switch (request.command) {
    case 'set-dropbox-token': {
      localStorage.setItem('dropbox-token', request.token);
      chrome.notifications.create('dropbox-notification', {
        type: 'basic',
        iconUrl: chrome.extension.getURL("icons/48.png"),
        title: 'Stellar Photos',
        message: 'Dropbox authenticated successfully',
      });
      break;
    }

    case 'close-tab': {
      chrome.tabs.remove(sender.tab.id);
      break;
    }

    case 'update-weather': {
      getWeatherInfo();
      break;
    }
  }
});

chrome.runtime.onConnect.addListener((options) => {
  options.onDisconnect.addListener(() => {
    getWeatherInfo();
  });
});